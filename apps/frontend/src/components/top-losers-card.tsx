'use client';

export function TopLosersCard() {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-col space-y-2">
                <h3 className="text-lg font-medium">Top Losers</h3>
                <div className="space-y-0">
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">NVDA</span>
                        <span className="text-green-500">+5.2%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">META</span>
                        <span className="text-green-500">+3.7%</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">AMD</span>
                        <span className="text-red-500">-4.3%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
