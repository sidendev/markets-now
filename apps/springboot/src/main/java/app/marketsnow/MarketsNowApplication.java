package app.marketsnow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MarketsNowApplication {
	public static void main(String[] args) {
		SpringApplication.run(MarketsNowApplication.class, args);
	}
}
