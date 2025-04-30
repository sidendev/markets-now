'use client';

import { useState } from 'react';
import { WatchlistForm } from './watchlist-form';

type WatchlistItem = {
    id: string;
    ticker: string;
    price: string;
    change: string;
    changePercent: string;
};

export function WatchlistTable() {
    // Mock data for now, this will come from a database in future
    const [stocks, setStocks] = useState<WatchlistItem[]>([
        {
            id: '1',
            ticker: 'AAPL',
            price: '182.44',
            change: '+1.23',
            changePercent: '+0.68%',
        },
        {
            id: '2',
            ticker: 'MSFT',
            price: '410.34',
            change: '-2.51',
            changePercent: '-0.61%',
        },
        {
            id: '3',
            ticker: 'AMZN',
            price: '178.75',
            change: '+3.42',
            changePercent: '+1.95%',
        },
    ]);

    const handleAddStock = (ticker: string) => {
        // this will validate the ticker and fetch current price data
        const newStock = {
            id: Date.now().toString(),
            ticker,
            price: '$' + (Math.random() * 1000).toFixed(2),
            change:
                Math.random() > 0.5
                    ? '+' + (Math.random() * 10).toFixed(2)
                    : '-' + (Math.random() * 10).toFixed(2),
            changePercent:
                Math.random() > 0.5
                    ? '+' + (Math.random() * 5).toFixed(2) + '%'
                    : '-' + (Math.random() * 5).toFixed(2) + '%',
        };
        setStocks([...stocks, newStock]);
    };

    const handleDeleteStock = (id: string) => {
        setStocks(stocks.filter((stock) => stock.id !== id));
    };

    return (
        <div>
            <WatchlistForm onAddStock={handleAddStock} />

            <div className="rounded-md border">
                <table className="w-full">
                    <thead>
                        <tr className="border-b bg-muted/50">
                            <th className="py-3 px-4 text-left">Ticker</th>
                            <th className="py-3 px-4 text-right">Price</th>
                            <th className="py-3 px-4 text-right">Change</th>
                            <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.id} className="border-b">
                                <td className="py-3 px-4 font-medium">
                                    {stock.ticker}
                                </td>
                                <td className="py-3 px-4 text-right">
                                    {stock.price}
                                </td>
                                <td
                                    className={`py-3 px-4 text-right ${
                                        stock.change.startsWith('+')
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {stock.change} ({stock.changePercent})
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <button
                                        onClick={() =>
                                            handleDeleteStock(stock.id)
                                        }
                                        className="text-red-500 hover:text-red-700"
                                        aria-label={`Remove ${stock.ticker} from watchlist`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
