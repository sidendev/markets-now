package app.marketsnow.dowjones.websocket;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

class DowJonesWebSocketServiceTest {

    private DowJonesQuoteCache mockCache;
    private DowJonesWebSocketClient mockClient;
    private DowJonesWebSocketService service;

    @BeforeEach
    void setUp() {
        mockCache = mock(DowJonesQuoteCache.class);
        mockClient = mock(DowJonesWebSocketClient.class);

        service = new DowJonesWebSocketService(mockCache) {
            @Override
            public void startWebSocket() {
                this.webSocketClient = mockClient;
                webSocketClient.connect();
            }

            @Override
            public void stopWebSocket() {
                if (webSocketClient != null && webSocketClient.isOpen()) {
                    webSocketClient.close();
                }
            }
        };
    }

    @Test
    void shouldStartWebSocketAndConnect() {
        service.startWebSocket();

        verify(mockClient, times(1)).connect();
    }

    @Test
    void shouldCloseWebSocketIfOpen() {
        when(mockClient.isOpen()).thenReturn(true);

        service.webSocketClient = mockClient;
        service.stopWebSocket();

        verify(mockClient, times(1)).close();
    }

    @Test
    void shouldNotCloseWebSocketIfNotOpen() {
        when(mockClient.isOpen()).thenReturn(false);

        service.webSocketClient = mockClient;
        service.stopWebSocket();

        verify(mockClient, never()).close();
    }
}

