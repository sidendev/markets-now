import { Header } from '../components/header';

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
                <div className="w-full max-w-5xl">
                    <h1 className="text-2xl font-bold mb-4">
                        Markets Overview
                    </h1>
                    <p className="text-sm text-muted-foreground mb-8">
                        Your real-time stock market tracker
                    </p>

                    {/* Placeholder for market data */}
                    <div className="w-full h-96 bg-card rounded-lg border p-6">
                        <div className="h-full flex items-center justify-center">
                            <p className="text-muted-foreground">
                                Market data will be displayed here
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
