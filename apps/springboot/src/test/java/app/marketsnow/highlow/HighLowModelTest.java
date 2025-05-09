package app.marketsnow.highlow;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class HighLowModelTest {

    @Test
    void shouldCreateModelWithAllFields() {
        HighLowModel model = new HighLowModel("AAPL", 123.45, 4.56, 3.78, 1000000L);

        assertEquals("AAPL", model.getTicker());
        assertEquals(123.45, model.getPrice());
        assertEquals(4.56, model.getChangeAmount());
        assertEquals(3.78, model.getChangePercentage());
        assertEquals(1000000L, model.getVolume());
    }
}
