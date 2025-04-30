import { WatchlistTable } from '../../components/watchlist-table';

export default function WatchListPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Stock Watchlist</h1>
            <p className="text-muted-foreground mb-8">
                Add stocks to your watchlist to track their performance.
            </p>

            <WatchlistTable />
        </div>
    );
}
