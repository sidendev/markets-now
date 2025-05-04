package app.marketsnow.indices;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
        import static org.mockito.Mockito.*;

public class IndicesServiceTest {

    private IndicesApiClient mockApiClient;
    private IndicesService indicesService;

    @BeforeEach
    void setUp() {
        mockApiClient = Mockito.mock(IndicesApiClient.class);
        indicesService = new IndicesService(mockApiClient);
    }

    @Test
    void shouldPopulateCacheAfterRefresh() {
        // Arrange: define a mock API response
        IndexQuote quote1 = new IndexQuote();
        quote1.setSymbol("^GSPC");
        quote1.setPrice(5000.0);

        IndexQuote quote2 = new IndexQuote();
        quote2.setSymbol("^IXIC");
        quote2.setPrice(16000.0);

        when(mockApiClient.fetchAllQuotes()).thenReturn(List.of(quote1, quote2));

        // Act: refreshes the cache
        indicesService.refreshCache();

        // Assert: cache should now contain those values
        List<IndexQuote> cachedQuotes = indicesService.getCachedQuotes();
        assertEquals(2, cachedQuotes.size());

        assertTrue(cachedQuotes.stream().anyMatch(q -> q.getSymbol().equals("^GSPC")));
        assertTrue(cachedQuotes.stream().anyMatch(q -> q.getSymbol().equals("^IXIC")));
    }
}

