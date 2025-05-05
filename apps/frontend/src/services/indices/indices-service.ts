import { MarketIndex } from './types';

export async function fetchIndices(): Promise<MarketIndex[]> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    const response = await fetch(`${apiUrl}/api/indices`);

    if (!response.ok) {
        throw new Error('Failed to fetch indices');
    }

    return response.json();
}
