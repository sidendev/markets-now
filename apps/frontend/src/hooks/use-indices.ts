import { useState, useEffect } from 'react';
import { fetchIndices } from '../services/indices/indices-service';
import { MarketIndex, MarketsData } from '../services/indices/types';

export function useIndices() {
    const [indices, setIndices] = useState<MarketIndex[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [marketsOpen, setMarketsOpen] = useState<boolean>(false);
    const [lastUpdated, setLastUpdated] = useState<number | null>(null);

    useEffect(() => {
        async function loadIndices() {
            try {
                setIsLoading(true);
                // The API now returns a different structure
                const response = await fetchIndices();

                // Check if response matches the new format
                if (response && Array.isArray(response)) {
                    // Old format - just an array of indices
                    setIndices(response);
                } else if (response && 'quotes' in response) {
                    // New format with quotes, marketsOpen, and lastUpdated
                    const data = response as unknown as MarketsData;
                    setIndices(data.quotes);
                    setMarketsOpen(data.marketsOpen);
                    setLastUpdated(data.lastUpdated);
                } else {
                    // Fallback
                    setIndices(response as unknown as MarketIndex[]);
                }
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error('Unknown error')
                );
            } finally {
                setIsLoading(false);
            }
        }

        loadIndices();
    }, []);

    return { indices, isLoading, error, marketsOpen, lastUpdated };
}
