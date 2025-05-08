package app.marketsnow.dowjones.websocket;

import org.java_websocket.handshake.ServerHandshake;
import org.java_websocket.client.WebSocketClient;
import java.net.URI;

public class DowJonesWebSocketClient extends WebSocketClient {

    public DowJonesWebSocketClient(URI serverUri) {
        super(serverUri);
    }

    public static String buildSubscribeMessage(String symbol) {
        return String.format("{\"type\":\"subscribe\",\"symbol\":\"%s\"}", symbol);
    }

    @Override
    public void onOpen(ServerHandshake handshakedata) {
        System.out.println("Connected to Finnhub WebSocket");

        String[] symbols = {
                "MMM", "AXP", "AMGN", "AMZN", "AAPL", "BA", "CAT", "CVX", "CSCO", "KO",
                "DIS", "GS", "HD", "HON", "IBM", "JNJ", "JPM", "MCD", "MRK", "MSFT",
                "NKE", "NVDA", "PG", "CRM", "SHW", "TRV", "UNH", "VZ", "V", "WMT"
        };

        for (String symbol : symbols) {
            send("{\"type\":\"subscribe\", \"symbol\":\"" + symbol + "\"}");
        }
    }

    @Override
    public void onMessage(String message) {
        System.out.println("Received: " + message);
    }

    @Override
    public void onClose(int code, String reason, boolean remote) {
        System.out.println("Closed: " + reason);
    }

    @Override
    public void onError(Exception ex) {
        ex.printStackTrace();
    }

}

