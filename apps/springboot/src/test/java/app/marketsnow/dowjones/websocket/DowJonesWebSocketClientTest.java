package app.marketsnow.dowjones.websocket;

import app.marketsnow.dowjones.websocket.utils.DowJonesMessageBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.net.URI;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DowJonesWebSocketClientTest {

    // Can lose this test - done in MessageBuilder
    @Test
    void shouldCorrectlyFormatSubscribeMessage() {
        String symbol = "AAPL";
        String expected = "{\"type\":\"subscribe\",\"symbol\":\"AAPL\"}";
        String actual = DowJonesMessageBuilder.buildSubscribeMessage(symbol);
        assertEquals(expected, actual);
    }

    // WIP - need to test original onMessage method
    @Test
    void shouldHandleReceivedMessage() {
        DowJonesQuoteCache mockCache = new DowJonesQuoteCache();
        ObjectMapper objectMapper = new ObjectMapper();

        class TestClient extends DowJonesWebSocketClient {
            private String lastMessage;

            // Inner test class - extends DowJonesWebSocketClient to override onMessage
            public TestClient(URI uri, DowJonesQuoteCache cache, ObjectMapper mapper) {
                super(uri, cache, mapper);
            }

            @Override
            public void onMessage(String message) {
                this.lastMessage = message;
            }

            public String getLastMessage() {
                return lastMessage;
            }
        }

        TestClient client = new TestClient(URI.create("ws://localhost"), mockCache, objectMapper);
        String mockMessage = "{\"type\":\"ping\"}";
        client.onMessage(mockMessage);
        assertEquals(mockMessage, client.getLastMessage());
    }
}




