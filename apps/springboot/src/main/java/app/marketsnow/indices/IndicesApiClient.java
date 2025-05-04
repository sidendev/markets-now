package app.marketsnow.indices;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class IndicesApiClient {

    @Value("${FMP_API_KEY}")
    private String FmpApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public IndexQuote fetchQuote(String symbol) {
        String url = String.format(
                "https://financialmodelingprep.com/stable/quote-short?symbol=%s&apikey=%s",
                symbol,
                FmpApiKey
        );

        IndexQuote[] response = restTemplate.getForObject(url, IndexQuote[].class);
        return response != null && response.length > 0 ? response[0] : null;
    }
}
