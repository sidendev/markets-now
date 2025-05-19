package app.marketsnow.indices;

import java.util.Date;
import java.util.List;

public class IndexQuotesResponse {
    private final List<IndexQuote> quotes;
    private final boolean marketsOpen;
    private final Date lastUpdated;

    public IndexQuotesResponse(List<IndexQuote> quotes, boolean marketsOpen, Date lastUpdated) {
        this.quotes = quotes;
        this.marketsOpen = marketsOpen;
        this.lastUpdated = lastUpdated;
    }

    public List<IndexQuote> getQuotes() {
        return quotes;
    }

    public boolean isMarketsOpen() {
        return marketsOpen;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }
}