export interface MarketIndex {
    symbol: string;
    price: number;
    change: number;
    volume: number;
}

export interface MarketsData {
    quotes: MarketIndex[];
    marketsOpen: boolean;
    lastUpdated: number;
}
