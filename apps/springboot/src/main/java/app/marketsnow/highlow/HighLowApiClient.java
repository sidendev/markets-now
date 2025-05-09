package app.marketsnow.highlow;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class HighLowApiClient {

    @Value("${AV_API_KEY}")
    private String apiKey;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public List<HighLowModel> getTopGainers() {
        return fetchTopQuotes("top_gainers");
    }

    public List<HighLowModel> getTopLosers() {
        return fetchTopQuotes("top_losers");
    }

    private List<HighLowModel> fetchTopQuotes(String key) {
        String url = "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=" + apiKey;
        List<HighLowModel> quotes = new ArrayList<>();

        try {
            String json = restTemplate.getForObject(url, String.class);
            JsonNode root = objectMapper.readTree(json);
            JsonNode items = root.path(key);

            for (int i = 0; i < 3 && i < items.size(); i++) {
                JsonNode item = items.get(i);
                HighLowModel quote = new HighLowModel(
                        item.get("ticker").asText(),
                        Double.parseDouble(item.get("price").asText()),
                        Double.parseDouble(item.get("change_amount").asText()),
                        Double.parseDouble(item.get("change_percentage").asText().replace("%", "")),
                        Long.parseLong(item.get("volume").asText())
                );
                quotes.add(quote);
            }
        } catch (Exception e) {
            e.printStackTrace(); // swap for logger later
        }

        return quotes;
    }
}


