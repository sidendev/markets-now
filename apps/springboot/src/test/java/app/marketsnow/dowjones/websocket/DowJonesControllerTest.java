package app.marketsnow.dowjones.websocket;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.Map;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(DowJonesController.class)
class DowJonesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private DowJonesQuoteCache quoteCache;

    @Test
    void shouldReturnQuotesAsJson() throws Exception {
        DowJonesQuoteModel quote = new DowJonesQuoteModel("AAPL", 123.45, 1620000000000L, 1000);
        Map<String, DowJonesQuoteModel> quotes = Map.of("AAPL", quote);

        when(quoteCache.getAllQuotes()).thenReturn(quotes);

        mockMvc.perform(get("/api/dowjones/quotes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.AAPL.symbol").value("AAPL"))
                .andExpect(jsonPath("$.AAPL.price").value(123.45))
                .andExpect(jsonPath("$.AAPL.timestamp").value(1620000000000L))
                .andExpect(jsonPath("$.AAPL.volume").value(1000));
    }

    @Test
    void shouldReturnEmptyJsonIfNoQuotes() throws Exception {
        when(quoteCache.getAllQuotes()).thenReturn(Collections.emptyMap());

        mockMvc.perform(get("/api/dowjones/quotes"))
                .andExpect(status().isOk())
                .andExpect(content().json("{}"));
    }
}

