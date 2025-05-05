import { useState, useEffect } from 'react';
import { fetchIndices } from '../services/indices/indices-service';
import { MarketIndex } from '../services/indices/types';

export function useIndices() {
    const [indices, setIndices] = useState<MarketIndex[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function loadIndices() {
            try {
                setIsLoading(true);
                const data = await fetchIndices();
                setIndices(data);
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

    return { indices, isLoading, error };
}
