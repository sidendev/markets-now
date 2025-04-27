import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl">Markets Now</span>
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
                            className="w-full py-1.5 px-3 bg-muted text-sm rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
