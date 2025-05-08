package app.marketsnow.dowjones.websocket;

import org.springframework.stereotype.Component;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class DowJonesQuoteCache {

    private final Map<String, DowJonesQuoteModel> quoteMap = new ConcurrentHashMap<>();

    public void updateQuote(String symbol, DowJonesQuoteModel quote) {
        quoteMap.put(symbol, quote);
    }

    public DowJonesQuoteModel getQuote(String symbol) {
        return quoteMap.get(symbol);
    }

    public Map<String, DowJonesQuoteModel> getAllQuotes() {
        return quoteMap;
    }
}

