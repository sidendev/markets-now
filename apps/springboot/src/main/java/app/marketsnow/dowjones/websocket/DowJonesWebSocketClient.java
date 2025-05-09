package app.marketsnow.dowjones.websocket;

import app.marketsnow.dowjones.websocket.utils.DowJonesMessageBuilder;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.java_websocket.handshake.ServerHandshake;
import org.java_websocket.client.WebSocketClient;
import java.net.URI;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DowJonesWebSocketClient extends WebSocketClient {

    private final DowJonesQuoteCache cache;
    private final ObjectMapper objectMapper;

    public DowJonesWebSocketClient(URI serverUri, DowJonesQuoteCache cache, ObjectMapper objectMapper) {
        super(serverUri);
        this.cache = cache;
        this.objectMapper = objectMapper;
    }

    @Override
    public void onOpen(ServerHandshake handshakedata) {
        log.info("Connected to DowJones WebSocket");

        String[] symbols = {
                "MMM", "AXP", "AMGN", "AMZN", "AAPL", "BA", "CAT", "CVX", "CSCO", "KO",
                "DIS", "GS", "HD", "HON", "IBM", "JNJ", "JPM", "MCD", "MRK", "MSFT",
                "NKE", "NVDA", "PG", "CRM", "SHW", "TRV", "UNH", "VZ", "V", "WMT"
        };

        for (String symbol : symbols) {
            send(DowJonesMessageBuilder.buildSubscribeMessage(symbol));
        }
    }

    @Override
    public void onMessage(String message) {
        try {
            JsonNode root = objectMapper.readTree(message);

            if (root.has("type") && "trade".equals(root.get("type").asText())) {
                JsonNode dataArray = root.get("data");
                if (dataArray != null && dataArray.isArray()) {
                    for (JsonNode trade : dataArray) {
                        String symbol = trade.get("s").asText();
                        double price = trade.get("p").asDouble();
                        long timestamp = trade.get("t").asLong();
                        int volume = trade.get("v").asInt();

                        DowJonesQuoteModel quote = new DowJonesQuoteModel(symbol, price, timestamp, volume);
                        cache.updateQuote(symbol, quote);
                    }
                }
            } else if (root.has("type") && "ping".equals(root.get("type").asText())) {
                log.debug("Ping received");
            }
        } catch (Exception e) {
            log.error("Error parsing WebSocket message", e);
        }
    }

    @Override
    public void onClose(int code, String reason, boolean remote) {
        log.warn("WebSocket closed: code={}, reason={}, remote={}", code, reason, remote);
    }

    @Override
    public void onError(Exception ex) {
        log.error("WebSocket error occurred", ex);
    }
}


