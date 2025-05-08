package app.marketsnow.dowjones.websocket.utils;

public class DowJonesMessageBuilder {

    public static String buildSubscribeMessage(String symbol) {
        return String.format("{\"type\":\"subscribe\",\"symbol\":\"%s\"}", symbol);
    }

    public static String buildUnsubscribeMessage(String symbol) {
        return String.format("{\"type\":\"unsubscribe\",\"symbol\":\"%s\"}", symbol);
    }
}

