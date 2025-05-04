package app.marketsnow.indices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/indices")
public class IndicesController {

    private final IndicesService indicesService;

    public IndicesController(IndicesService indicesService) {
        this.indicesService = indicesService;
    }

    @GetMapping
    public List<IndexQuote> getAllIndices() {
        return indicesService.getCachedQuotes();
    }
}

