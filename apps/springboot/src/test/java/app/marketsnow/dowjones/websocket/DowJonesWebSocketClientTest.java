package app.marketsnow.dowjones.websocket;

import app.marketsnow.dowjones.websocket.utils.DowJonesMessageBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.net.URI;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DowJonesWebSocketClientTest {

    @Test
    void shouldCorrectlyFormatSubscribeMessage() {
        String symbol = "AAPL";
        String expected = "{\"type\":\"subscribe\",\"symbol\":\"AAPL\"}";
        String actual = DowJonesMessageBuilder.buildSubscribeMessage(symbol);
        assertEquals(expected, actual);
    }

    @Test
    void shouldHandleReceivedMessage() {
        DowJonesQuoteCache mockCache = new DowJonesQuoteCache();
        ObjectMapper objectMapper = new ObjectMapper();

        class TestClient extends DowJonesWebSocketClient {
            private String lastMessage;

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




