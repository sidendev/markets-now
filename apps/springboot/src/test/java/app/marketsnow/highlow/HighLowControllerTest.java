package app.marketsnow.highlow;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(HighLowController.class)
class HighLowControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private HighLowService service;

    @Test
    void shouldReturnTopGainersJson() throws Exception {
        List<HighLowModel> mockData = List.of(new HighLowModel("AAPL", 100, 5, 5, 1000000));
        when(service.getTop3Gainers()).thenReturn(mockData);

        mockMvc.perform(get("/api/highlow/gainers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].ticker").value("AAPL"));
    }

    @Test
    void shouldReturnTopLosersJson() throws Exception {
        List<HighLowModel> mockData = List.of(new HighLowModel("TSLA", 80, -4, -5, 500000));
        when(service.getTop3Losers()).thenReturn(mockData);

        mockMvc.perform(get("/api/highlow/losers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].ticker").value("TSLA"));
    }
}

