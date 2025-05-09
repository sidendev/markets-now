package app.marketsnow.highlow;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class HighLowServiceTest {

    private HighLowApiClient apiClient;
    private HighLowService service;

    @BeforeEach
    void setUp() {
        apiClient = mock(HighLowApiClient.class);
        service = new HighLowService(apiClient);
    }

    @Test
    void shouldReturnTopGainers() {
        List<HighLowModel> mockData = List.of(new HighLowModel("AAPL", 100, 5, 5, 1000000));
        when(apiClient.getTopGainers()).thenReturn(mockData);

        assertEquals(mockData, service.getTop3Gainers());
    }

    @Test
    void shouldReturnTopLosers() {
        List<HighLowModel> mockData = List.of(new HighLowModel("TSLA", 80, -4, -5, 500000));
        when(apiClient.getTopLosers()).thenReturn(mockData);

        assertEquals(mockData, service.getTop3Losers());
    }
}

