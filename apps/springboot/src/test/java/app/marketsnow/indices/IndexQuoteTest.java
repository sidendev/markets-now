package app.marketsnow.indices;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class IndexQuoteTest {

    @Test
    void shouldDeserializeIndexQuoteFromJson() throws IOException {
        String json = """
        [
            {
                "symbol": "^GSPC",
                "price": 5686.67,
                "change": 82.53,
                "volume": 3010089000
            }
        ]
        """;

        ObjectMapper mapper = new ObjectMapper();
        IndexQuote[] quotes = mapper.readValue(json, IndexQuote[].class);

        assertEquals("^GSPC", quotes[0].getSymbol());
        assertEquals(5686.67, quotes[0].getPrice());
        assertEquals(82.53, quotes[0].getChange());
        assertEquals(3010089000L, quotes[0].getVolume());
    }
}
