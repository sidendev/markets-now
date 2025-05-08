package app.marketsnow.dowjones.websocket;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class DowJonesWebSocketClientTest {

    @Test
    void shouldCorrectlyFormatSubscribeMessage() {
        String symbol = "AAPL";
        String expected = "{\"type\":\"subscribe\",\"symbol\":\"AAPL\"}";
        String actual = DowJonesWebSocketClient.buildSubscribeMessage(symbol);
        assertEquals(expected, actual);
    }
}


