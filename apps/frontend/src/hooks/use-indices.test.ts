import { renderHook, waitFor } from '@testing-library/react';
import { useIndices } from './use-indices';
import { fetchIndices } from '../services/indices/indices-service';

// mock the indices service
jest.mock('../services/indices/indices-service');

describe('useIndices', () => {
    it('should fetch and return indices', async () => {
        const mockIndices = [
            {
                symbol: '^GSPC',
                price: 5686.67,
                change: 82.53,
                volume: 3010089000,
            },
        ];

        (fetchIndices as jest.Mock).mockResolvedValueOnce(mockIndices);

        const { result } = renderHook(() => useIndices());

        // check it should be loading
        expect(result.current.isLoading).toBe(true);

        // wait for the hook to finish
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.indices).toEqual(mockIndices);
        expect(result.current.error).toBeNull();
    });
});
