package app.marketsnow.highlow;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HighLowModel {
    private String ticker;
    private double price;
    private double changeAmount;
    private double changePercentage;
    private long volume;
}
