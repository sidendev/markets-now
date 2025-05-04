package app.marketsnow.indices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class IndicesIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnLiveIndexDataFromExternalApi() throws Exception {
        mockMvc.perform(get("/api/indices"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").isNumber())
                .andExpect(jsonPath("$[0].symbol").isString())
                .andExpect(jsonPath("$[0].price").isNumber())
                .andExpect(jsonPath("$[0].change").isNumber())
                .andExpect(jsonPath("$[0].volume").isNumber());
    }
}
