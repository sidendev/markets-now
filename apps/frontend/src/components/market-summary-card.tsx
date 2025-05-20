'use client';

import { useIndices } from '../hooks/use-indices';
import { useEffect, useState } from 'react';

function TimeDisplay({ initialTime }: { initialTime: number | null }) {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        // format matches server time format
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // format the epoch timestamp if provided, otherwise show current time
    if (initialTime) {
        const date = new Date(initialTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return (
            <span>
                {hours}:{minutes}:{seconds}
            </span>
        );
    }

    return <span>{currentTime}</span>;
}

export function MarketSummaryCard() {
    const { indices, isLoading, error, marketsOpen, lastUpdated } =
        useIndices();
    const [, setLastUpdated] = useState<Date>(new Date());

    // refresh data every 15 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            // this will trigger a re-fetch in the useIndices hook
            setLastUpdated(new Date());
        }, 15 * 60 * 1000); // 15 minutes in milliseconds

        return () => clearInterval(interval);
    }, []);

    const spIndex = indices.find((idx) => idx.symbol === '^GSPC');
    const nasdaqIndex = indices.find((idx) => idx.symbol === '^IXIC');
    const dowIndex = indices.find((idx) => idx.symbol === '^DJI');

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-col space-y-2">
                <h3 className="text-lg font-medium">Market Indices</h3>

                {isLoading && (
                    <p className="text-sm text-muted-foreground">
                        Loading indices data...
                    </p>
                )}

                {error && (
                    <p className="text-sm text-red-500">
                        Error loading market data
                    </p>
                )}

                {!isLoading && !error && (
                    <div className="space-y-0">
                        {spIndex && (
                            <div className="flex justify-between py-2 border-b">
                                <span className="text-muted-foreground">
                                    S&P 500
                                </span>
                                <span
                                    className={
                                        spIndex.change >= 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {spIndex.price.toFixed(2)} (
                                    {spIndex.change >= 0 ? '+' : ''}
                                    {spIndex.change.toFixed(2)})
                                </span>
                            </div>
                        )}

                        {nasdaqIndex && (
                            <div className="flex justify-between py-2 border-b">
                                <span className="text-muted-foreground">
                                    Nasdaq
                                </span>
                                <span
                                    className={
                                        nasdaqIndex.change >= 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {nasdaqIndex.price.toFixed(2)} (
                                    {nasdaqIndex.change >= 0 ? '+' : ''}
                                    {nasdaqIndex.change.toFixed(2)})
                                </span>
                            </div>
                        )}

                        {dowIndex && (
                            <div className="flex justify-between py-2">
                                <span className="text-muted-foreground">
                                    Dow Jones
                                </span>
                                <span
                                    className={
                                        dowIndex.change >= 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {dowIndex.price.toFixed(2)} (
                                    {dowIndex.change >= 0 ? '+' : ''}
                                    {dowIndex.change.toFixed(2)})
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <div className="pt-2 text-xs text-muted-foreground">
                    {marketsOpen ? (
                        <span className="text-green-500">Markets Open</span>
                    ) : (
                        <span className="text-red-500">Markets Closed</span>
                    )}{' '}
                    · Last updated: <TimeDisplay initialTime={lastUpdated} />
                </div>
            </div>
        </div>
    );
}
