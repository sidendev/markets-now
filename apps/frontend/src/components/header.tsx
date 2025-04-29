import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl hidden sm:inline-block">
                            Markets Now
                        </span>
                        <span className="font-bold text-xl sm:hidden">MN</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <Link
                        href="/markets"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Markets
                    </Link>
                    <Link
                        href="/screener"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Screener
                    </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
