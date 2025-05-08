package app.marketsnow.dowjones.websocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DowJonesQuoteModel {
    private String symbol;     // stock ticker "AAPL"
    private double price;      // trade price
    private long timestamp;    // unix epoch in milliseconds
    private long volume;       // number of shares traded
}
