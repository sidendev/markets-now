package app.marketsnow.indices;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class IndicesApiClientTest {

    @Autowired
    private IndicesApiClient client;

    @Test
    void shouldFetchQuoteForGspcFromFmp() {
        IndexQuote quote = client.fetchQuote("^GSPC");

        assertNotNull(quote);
        assertEquals("^GSPC", quote.getSymbol());
        assertTrue(quote.getPrice() > 0);
    }
}

