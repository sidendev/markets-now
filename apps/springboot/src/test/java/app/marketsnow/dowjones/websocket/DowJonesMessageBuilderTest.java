package app.marketsnow.dowjones.websocket;

import app.marketsnow.dowjones.websocket.utils.DowJonesMessageBuilder;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class DowJonesMessageBuilderTest {

    @Test
    void shouldCorrectlyFormatSubscribeMessage() {
        String symbol = "AAPL";
        String expected = "{\"type\":\"subscribe\",\"symbol\":\"AAPL\"}";
        String actual = DowJonesMessageBuilder.buildSubscribeMessage(symbol);
        assertEquals(expected, actual);
    }
}
