package app.marketsnow.dowjones.websocket;

import app.marketsnow.dowjones.websocket.utils.DowJonesMessageBuilder;
import org.junit.jupiter.api.Test;
import java.net.URI;
import static org.junit.jupiter.api.Assertions.*;

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
        class TestClient extends DowJonesWebSocketClient {
            private String lastMessage;

            public TestClient(URI uri) {
                super(uri);
            }

            @Override
            public void onMessage(String message) {
                this.lastMessage = message;
            }

            public String getLastMessage() {
                return lastMessage;
            }
        }

        TestClient client = new TestClient(URI.create("ws://localhost"));
        String mockMessage = "{\"type\":\"ping\"}";
        client.onMessage(mockMessage);
        assertEquals("{\"type\":\"ping\"}", client.getLastMessage());
    }
}


