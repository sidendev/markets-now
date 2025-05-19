package app.marketsnow.indices;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class IndicesService {

    private final IndicesApiClient apiClient;
    private final Map<String, IndexQuote> cache = new ConcurrentHashMap<>();
    private boolean marketsOpen = false;
    private Date lastSuccessfulUpdate = null;

    public IndicesService(IndicesApiClient apiClient) {
        this.apiClient = apiClient;
    }

    // returns the latest quotes from memory with market status
    public IndexQuotesResponse getCachedQuotes() {
        return new IndexQuotesResponse(
            new ArrayList<>(cache.values()), 
            marketsOpen, 
            lastSuccessfulUpdate
        );
    }

    // gets new quotes every 30 minutes (1800000 ms)
    @Scheduled(fixedRate = 1800000)
    public void refreshCache() {
        try {
            List<IndexQuote> quotes = apiClient.fetchAllQuotes();
            
            if (quotes != null && !quotes.isEmpty()) {
                // update if we got valid data
                quotes.forEach(quote -> cache.put(quote.getSymbol(), quote));
                lastSuccessfulUpdate = new Date();
                marketsOpen = true;
                System.out.println("Index FMP API cache refreshed at: " + lastSuccessfulUpdate);
            } else {
                marketsOpen = false;
                System.out.println("Index API returned no data - markets likely closed");
            }
        } catch (Exception e) {
            // If API call fails, keep last data
            marketsOpen = false;
            System.out.println("Failed to refresh index data - markets likely closed: " + e.getMessage());
        }
    }
}