import { MarketSummaryCard } from '../components/market-summary-card';
import { TopGainersCard } from '../components/top-gainers-card';
import { TopLosersCard } from '../components/top-losers-card';
import { HighestVolumeTable } from '../components/highest-volume-table';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-6">
                <div className="flex flex-col space-y-2 mb-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Markets Overview
                    </h2>
                    <p className="text-muted-foreground">
                        Real-time market tracking & alert notifications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MarketSummaryCard />

                    <TopGainersCard />

                    <TopLosersCard />
                </div>

                <div className="mt-6">
                    <HighestVolumeTable />
                </div>
            </main>
        </div>
    );
}
