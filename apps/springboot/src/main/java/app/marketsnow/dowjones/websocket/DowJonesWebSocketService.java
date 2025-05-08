package app.marketsnow.dowjones.websocket;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;

@Slf4j
@Service
public class DowJonesWebSocketService {

    private final DowJonesQuoteCache quoteCache;
    protected DowJonesWebSocketClient webSocketClient;

    @Value("${FINNHUB_API_KEY}")
    private String apiKey;

    public DowJonesWebSocketService(DowJonesQuoteCache quoteCache) {
        this.quoteCache = quoteCache;
    }

    @PostConstruct
    public void startWebSocket() {
        try {
            URI uri = new URI("wss://ws.finnhub.io?token=" + apiKey);
            webSocketClient = new DowJonesWebSocketClient(uri, quoteCache);
            webSocketClient.connect();
            log.info("DowJones WebSocket connection started");
        } catch (Exception e) {
            log.error("Error starting DowJones WebSocket connection", e);
        }
    }

    @PreDestroy
    public void stopWebSocket() {
        if (webSocketClient != null && webSocketClient.isOpen()) {
            webSocketClient.close();
            log.info("DowJones WebSocket connection closed");
        }
    }
}


