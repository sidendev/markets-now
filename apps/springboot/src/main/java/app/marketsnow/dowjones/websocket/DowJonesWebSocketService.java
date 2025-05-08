package app.marketsnow.dowjones.websocket;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;

@Service
public class DowJonesWebSocketService {

    private DowJonesWebSocketClient webSocketClient;

    @Value("${FINNHUB_API_KEY}")
    private String apiKey;

    @PostConstruct
    public void startWebSocket() {
        try {
            URI uri = new URI("wss://ws.finnhub.io?token=" + apiKey);
            webSocketClient = new DowJonesWebSocketClient(uri);
            webSocketClient.connect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PreDestroy
    public void stopWebSocket() {
        if (webSocketClient != null && webSocketClient.isOpen()) {
            webSocketClient.close();
        }
    }
}

