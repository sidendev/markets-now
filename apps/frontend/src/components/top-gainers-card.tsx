'use client';

export function TopGainersCard() {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-col space-y-2">
                <h3 className="text-lg font-medium">Top Gainers</h3>
                <div className="space-y-0">
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">AAPL</span>
                        <span className="text-green-500">183.27 (+0.42%)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">MSFT</span>
                        <span className="text-red-500">413.64 (-1.1%)</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">TSLA</span>
                        <span className="text-green-500">194.05 (+2.3%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
