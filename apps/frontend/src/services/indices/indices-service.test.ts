import { fetchIndices } from './indices-service';

// mock fetch
global.fetch = jest.fn();

describe('IndicesService', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should fetch market indices successfully', async () => {
        // mock successful response matching the Spring Boot API format
        const mockIndices = [
            {
                symbol: '^GSPC',
                price: 5686.67,
                change: 82.53,
                volume: 3010089000,
            },
            {
                symbol: '^IXIC',
                price: 17977.729,
                change: 266.989,
                volume: 7305438000,
            },
            {
                symbol: '^DJI',
                price: 41317.43,
                change: 564.47,
                volume: 589870713,
            },
        ];

        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockIndices,
        });

        const result = await fetchIndices();

        expect(fetch).toHaveBeenCalledWith('/api/indices');
        expect(result).toEqual(mockIndices);
    });

    it('should handle API errors', async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(fetchIndices()).rejects.toThrow('Failed to fetch indices');
    });
});
