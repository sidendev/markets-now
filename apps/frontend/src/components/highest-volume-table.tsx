'use client';

// with dummy data for now
export function HighestVolumeTable() {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">S&P Highest Volume</h3>
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
                                %
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
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                AMZN
                            </td>
                            <td className="p-2 align-middle">178.75</td>
                            <td className="p-2 align-middle text-green-500">
                                +2.65
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.50%
                            </td>
                            <td className="p-2 align-middle">36.21M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                NVDA
                            </td>
                            <td className="p-2 align-middle">843.75</td>
                            <td className="p-2 align-middle text-green-500">
                                +12.83
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.54%
                            </td>
                            <td className="p-2 align-middle">31.89M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                META
                            </td>
                            <td className="p-2 align-middle">472.22</td>
                            <td className="p-2 align-middle text-red-500">
                                -6.38
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.33%
                            </td>
                            <td className="p-2 align-middle">15.34M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                GOOG
                            </td>
                            <td className="p-2 align-middle">166.84</td>
                            <td className="p-2 align-middle text-green-500">
                                +1.29
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +0.78%
                            </td>
                            <td className="p-2 align-middle">14.57M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                JPM
                            </td>
                            <td className="p-2 align-middle">198.48</td>
                            <td className="p-2 align-middle text-green-500">
                                +2.17
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.10%
                            </td>
                            <td className="p-2 align-middle">8.92M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">V</td>
                            <td className="p-2 align-middle">278.35</td>
                            <td className="p-2 align-middle text-red-500">
                                -1.85
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -0.66%
                            </td>
                            <td className="p-2 align-middle">7.13M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                WMT
                            </td>
                            <td className="p-2 align-middle">67.42</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.89
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.34%
                            </td>
                            <td className="p-2 align-middle">6.82M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                AMD
                            </td>
                            <td className="p-2 align-middle">156.82</td>
                            <td className="p-2 align-middle text-red-500">
                                -2.37
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.49%
                            </td>
                            <td className="p-2 align-middle">12.75M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                BAC
                            </td>
                            <td className="p-2 align-middle">38.94</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.48
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.25%
                            </td>
                            <td className="p-2 align-middle">8.17M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                XOM
                            </td>
                            <td className="p-2 align-middle">117.96</td>
                            <td className="p-2 align-middle text-red-500">
                                -0.94
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -0.79%
                            </td>
                            <td className="p-2 align-middle">7.23M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                PFE
                            </td>
                            <td className="p-2 align-middle">28.73</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.35
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.23%
                            </td>
                            <td className="p-2 align-middle">6.48M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                INTC
                            </td>
                            <td className="p-2 align-middle">31.22</td>
                            <td className="p-2 align-middle text-red-500">
                                -0.78
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -2.44%
                            </td>
                            <td className="p-2 align-middle">11.34M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                CSCO
                            </td>
                            <td className="p-2 align-middle">47.62</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.52
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.10%
                            </td>
                            <td className="p-2 align-middle">5.87M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">KO</td>
                            <td className="p-2 align-middle">63.47</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.39
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +0.62%
                            </td>
                            <td className="p-2 align-middle">5.36M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                DIS
                            </td>
                            <td className="p-2 align-middle">92.75</td>
                            <td className="p-2 align-middle text-red-500">
                                -1.23
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.31%
                            </td>
                            <td className="p-2 align-middle">6.94M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                PEP
                            </td>
                            <td className="p-2 align-middle">170.52</td>
                            <td className="p-2 align-middle text-green-500">
                                +1.47
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +0.87%
                            </td>
                            <td className="p-2 align-middle">4.79M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                NFLX
                            </td>
                            <td className="p-2 align-middle">621.98</td>
                            <td className="p-2 align-middle text-green-500">
                                +8.73
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.42%
                            </td>
                            <td className="p-2 align-middle">7.82M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                ADBE
                            </td>
                            <td className="p-2 align-middle">523.65</td>
                            <td className="p-2 align-middle text-red-500">
                                -5.82
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.10%
                            </td>
                            <td className="p-2 align-middle">3.92M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                CRM
                            </td>
                            <td className="p-2 align-middle">248.37</td>
                            <td className="p-2 align-middle text-green-500">
                                +3.24
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +1.32%
                            </td>
                            <td className="p-2 align-middle">5.18M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">
                                ORCL
                            </td>
                            <td className="p-2 align-middle">129.83</td>
                            <td className="p-2 align-middle text-red-500">
                                -1.35
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.03%
                            </td>
                            <td className="p-2 align-middle">4.56M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">VZ</td>
                            <td className="p-2 align-middle">41.62</td>
                            <td className="p-2 align-middle text-green-500">
                                +0.34
                            </td>
                            <td className="p-2 align-middle text-green-500">
                                +0.82%
                            </td>
                            <td className="p-2 align-middle">4.27M</td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 align-middle font-medium">T</td>
                            <td className="p-2 align-middle">17.24</td>
                            <td className="p-2 align-middle text-red-500">
                                -0.18
                            </td>
                            <td className="p-2 align-middle text-red-500">
                                -1.03%
                            </td>
                            <td className="p-2 align-middle">3.85M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
