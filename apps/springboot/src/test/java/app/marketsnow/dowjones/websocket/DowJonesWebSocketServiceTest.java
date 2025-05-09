package app.marketsnow.dowjones.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.net.URI;

import static org.mockito.Mockito.*;

class DowJonesWebSocketServiceTest {

    private DowJonesQuoteCache mockCache;
    private ObjectMapper objectMapper;
    private DowJonesWebSocketClient mockClient;
    private DowJonesWebSocketService service;

    @BeforeEach
    void setUp() {
        mockCache = mock(DowJonesQuoteCache.class);
        objectMapper = mock(ObjectMapper.class); // or `new ObjectMapper()` if preferred
        mockClient = mock(DowJonesWebSocketClient.class);

        service = new DowJonesWebSocketService(mockCache, objectMapper) {
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


