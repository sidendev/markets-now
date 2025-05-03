package app.marketsnow.indices;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class IndicesApiClientTest {

    @Test
    void shouldFetchQuoteForGspcFromFmp() {
        IndicesApiClient client = new IndicesApiClient();

        IndexQuote quote = client.fetchQuote("^GSPC");

        assertNotNull(quote);
        assertEquals("^GSPC", quote.getSymbol());
        assertTrue(quote.getPrice() > 0);
    }
}

