package app.marketsnow.indices;

import org.springframework.beans.factory.annotation.Value;

public class IndicesApiClient {

    @Value("${FMP_API_KEY}")
    private String FmpApiKey;

    public IndexQuote fetchQuote(String s) {
        return new IndexQuote();
    }
}
