package app.marketsnow.indices;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.*;
        import java.util.concurrent.ConcurrentHashMap;

@Service
public class IndicesService {

    private final IndicesApiClient apiClient;
    private final Map<String, IndexQuote> cache = new ConcurrentHashMap<>();

    public IndicesService(IndicesApiClient apiClient) {
        this.apiClient = apiClient;
    }

    // returns the latest quotes from memory
    public List<IndexQuote> getCachedQuotes() {
        return new ArrayList<>(cache.values());
    }

    // gets new quotes every 30 minutes (1800000 ms)
    @Scheduled(fixedRate = 1800000)
    public void refreshCache() {
        List<IndexQuote> quotes = apiClient.fetchAllQuotes();
        quotes.forEach(quote -> cache.put(quote.getSymbol(), quote));
        System.out.println("Index cache last refreshed at: " + new Date());
    }
}

