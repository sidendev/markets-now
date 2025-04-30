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
                    {/* Market Summary Card */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-2">
                            <h3 className="text-lg font-medium">
                                Market Indices
                            </h3>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        S&P 500
                                    </span>
                                    <span className="text-green-500">
                                        +1.2%
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Nasdaq
                                    </span>
                                    <span className="text-red-500">-0.8%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Dow Jones
                                    </span>
                                    <span className="text-green-500">
                                        +0.5%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gainers Card */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-2">
                            <h3 className="text-lg font-medium">Top Gainers</h3>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        AAPL
                                    </span>
                                    <span className="text-green-500">
                                        183.27 (+0.42%)
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        MSFT
                                    </span>
                                    <span className="text-red-500">
                                        413.64 (-1.1%)
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        TSLA
                                    </span>
                                    <span className="text-green-500">
                                        194.05 (+2.3%)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Market Losers Card */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-col space-y-2">
                            <h3 className="text-lg font-medium">Top Losers</h3>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        NVDA
                                    </span>
                                    <span className="text-green-500">
                                        +5.2%
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        META
                                    </span>
                                    <span className="text-green-500">
                                        +3.7%
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        AMD
                                    </span>
                                    <span className="text-red-500">-4.3%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-4">Most Active</h3>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                                        Symbol
                                    </th>
                                    <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                                        Price
                                    </th>
                                    <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                                        Change
                                    </th>
                                    <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                                        % Change
                                    </th>
                                    <th className="h-10 px-2 text-left font-medium text-muted-foreground">
                                        Volume
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-2 align-middle font-medium">
                                        AAPL
                                    </td>
                                    <td className="p-2 align-middle">183.27</td>
                                    <td className="p-2 align-middle text-green-500">
                                        +0.77
                                    </td>
                                    <td className="p-2 align-middle text-green-500">
                                        +0.42%
                                    </td>
                                    <td className="p-2 align-middle">23.59M</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-2 align-middle font-medium">
                                        MSFT
                                    </td>
                                    <td className="p-2 align-middle">413.64</td>
                                    <td className="p-2 align-middle text-red-500">
                                        -4.57
                                    </td>
                                    <td className="p-2 align-middle text-red-500">
                                        -1.10%
                                    </td>
                                    <td className="p-2 align-middle">18.73M</td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-2 align-middle font-medium">
                                        TSLA
                                    </td>
                                    <td className="p-2 align-middle">194.05</td>
                                    <td className="p-2 align-middle text-green-500">
                                        +4.38
                                    </td>
                                    <td className="p-2 align-middle text-green-500">
                                        +2.31%
                                    </td>
                                    <td className="p-2 align-middle">44.69M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
