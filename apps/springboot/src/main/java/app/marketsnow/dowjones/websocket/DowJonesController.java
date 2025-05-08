package app.marketsnow.dowjones.websocket;

import org.springframework.web.bind.annotation.GetMapping;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/dowjones")
public class DowJonesController {

    private final DowJonesQuoteCache quoteCache;

    public DowJonesController(DowJonesQuoteCache quoteCache) {
        this.quoteCache = quoteCache;
    }

    @GetMapping("/quotes")
    public Map<String, DowJonesQuoteModel> getAllQuotes() {
        return quoteCache.getAllQuotes();
    }
}
