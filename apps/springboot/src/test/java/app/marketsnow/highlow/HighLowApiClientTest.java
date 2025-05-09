package app.marketsnow.highlow;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestTemplate;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.http.MediaType;
import static org.springframework.test.web.client.response.MockRestResponseCreators.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class HighLowApiClientTest {

    private HighLowApiClient client;
    private MockRestServiceServer mockServer;

    @BeforeEach
    void setUp() {
        RestTemplate restTemplate = new RestTemplate();
        client = new HighLowApiClient(restTemplate, new ObjectMapper());
        ReflectionTestUtils.setField(client, "apiKey", "test-key");

        mockServer = MockRestServiceServer.createServer(restTemplate);
    }

    @Test
    void shouldReturnTopThreeGainers() {
        String json = """
            {
              "top_gainers": [
                { "ticker": "AAA", "price": "10.0", "change_amount": "1.0", "change_percentage": "10%", "volume": "1000" },
                { "ticker": "BBB", "price": "20.0", "change_amount": "2.0", "change_percentage": "10%", "volume": "2000" },
                { "ticker": "CCC", "price": "30.0", "change_amount": "3.0", "change_percentage": "10%", "volume": "3000" },
                { "ticker": "DDD", "price": "40.0", "change_amount": "4.0", "change_percentage": "10%", "volume": "4000" }
              ]
            }
        """;

        mockServer.expect(requestTo("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=test-key"))
                .andRespond(withSuccess(json, MediaType.APPLICATION_JSON));

        List<HighLowModel> result = client.getTopGainers();

        assertEquals(3, result.size());
        assertEquals("AAA", result.get(0).getTicker());
        assertEquals(10.0, result.get(0).getPrice());
    }
}


