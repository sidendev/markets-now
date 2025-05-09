package app.marketsnow.highlow;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HighLowService {

    private final HighLowApiClient apiClient;

    public List<HighLowModel> getTop3Gainers() {
        return apiClient.getTopGainers();
    }

    public List<HighLowModel> getTop3Losers() {
        return apiClient.getTopLosers();
    }
}
