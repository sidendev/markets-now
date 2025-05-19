package app.marketsnow.indices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringJUnitConfig
@WebMvcTest(IndicesController.class)
public class IndicesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private IndicesService indicesService;

    @Test
    void shouldReturnListOfIndexQuotesAsJson() throws Exception {
        IndexQuote quote1 = new IndexQuote();
        quote1.setSymbol("^GSPC");
        quote1.setPrice(5000.0);
        quote1.setChange(100.0);
        quote1.setVolume(1000000L);

        IndexQuote quote2 = new IndexQuote();
        quote2.setSymbol("^IXIC");
        quote2.setPrice(15000.0);
        quote2.setChange(250.0);
        quote2.setVolume(2000000L);

        List<IndexQuote> quotes = List.of(quote1, quote2);
        
        IndexQuotesResponse response = new IndexQuotesResponse(quotes, true, new Date());
        
        when(indicesService.getCachedQuotes()).thenReturn(response);

        mockMvc.perform(get("/api/indices"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.quotes.length()").value(2))
                .andExpect(jsonPath("$.quotes[0].symbol").value("^GSPC"))
                .andExpect(jsonPath("$.quotes[0].price").value(5000.0))
                .andExpect(jsonPath("$.quotes[1].symbol").value("^IXIC"));
    }
}