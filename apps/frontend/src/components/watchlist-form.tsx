'use client';

import { useState } from 'react';

export function WatchlistForm({
    onAddStock,
}: {
    onAddStock: (ticker: string) => void;
}) {
    const [ticker, setTicker] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ticker.trim()) {
            onAddStock(ticker.trim().toUpperCase());
            setTicker('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
            <input
                type="text"
                placeholder="Enter stock ticker (e.g. AAPL)"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button
                type="submit"
                className="h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
                Add to Watchlist
            </button>
        </form>
    );
}
