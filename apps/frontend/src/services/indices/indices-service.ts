import { MarketIndex } from './types';

// using dev URL with correct port for Spring Boot API
export async function fetchIndices(): Promise<MarketIndex[]> {
    const response = await fetch('http://localhost:8080/api/indices');

    if (!response.ok) {
        throw new Error('Failed to fetch indices');
    }

    return response.json();
}
