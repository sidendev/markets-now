package app.marketsnow.indices;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

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

    @Test
    void shouldFetchMultipleIndexQuotes() {
        List<IndexQuote> quotes = client.fetchAllQuotes();

        assertEquals(3, quotes.size());

        List<String> symbols = quotes.stream().map(IndexQuote::getSymbol).toList();
        assertTrue(symbols.contains("^GSPC"));
        assertTrue(symbols.contains("^IXIC"));
        assertTrue(symbols.contains("^DJI"));

        quotes.forEach(q -> assertTrue(q.getPrice() > 0));
    }
}

