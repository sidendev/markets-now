package app.marketsnow.highlow;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/highlow")
@RequiredArgsConstructor
public class HighLowController {

    private final HighLowService service;

    @GetMapping("/gainers")
    public List<HighLowModel> getTopGainers() {
        return service.getTop3Gainers();
    }

    @GetMapping("/losers")
    public List<HighLowModel> getTopLosers() {
        return service.getTop3Losers();
    }
}
