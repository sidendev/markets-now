'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-6 max-w-[1440px] mx-auto">
                <div className="mr-4 flex">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl hidden sm:inline-block">
                            MarketsNow
                        </span>
                        <span className="font-bold text-xl sm:hidden">MN</span>
                    </Link>
                </div>

                {/* Desktop Navigation section */}
                <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
                    <Link
                        href="/"
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                            pathname === '/' ? '' : 'text-muted-foreground'
                        }`}
                    >
                        Markets
                    </Link>
                    <Link
                        href="/alerts"
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                            pathname === '/alerts'
                                ? ''
                                : 'text-muted-foreground'
                        }`}
                    >
                        Alerts
                    </Link>
                    <Link
                        href="/watchlist"
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                            pathname === '/watchlist'
                                ? ''
                                : 'text-muted-foreground'
                        }`}
                    >
                        Watchlist
                    </Link>
                </nav>

                {/* Desktop Search and Login section*/}
                <div className="hidden md:flex ml-auto items-center space-x-4">
                    <div className="relative w-full max-w-[160px] sm:max-w-sm">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                    </div>
                    <button
                        className="h-9 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer"
                        aria-label="Login"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="ml-auto md:hidden flex items-center justify-center p-2 rounded-md text-foreground"
                    aria-label="Toggle menu"
                >
                    {!mobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" x2="6" y1="6" y2="18" />
                            <line x1="6" x2="18" y1="6" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border/40 bg-background">
                    <div className="px-4 py-3 space-y-4">
                        <Link
                            href="/"
                            className={`block py-2 px-3 rounded-md text-base font-medium transition-colors hover:bg-muted ${
                                pathname === '/'
                                    ? 'text-primary'
                                    : 'text-foreground'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Markets
                        </Link>
                        <Link
                            href="/alerts"
                            className={`block py-2 px-3 rounded-md text-base font-medium transition-colors hover:bg-muted ${
                                pathname === '/alerts'
                                    ? 'text-primary'
                                    : 'text-foreground'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Alerts
                        </Link>
                        <Link
                            href="/watchlist"
                            className={`block py-2 px-3 rounded-md text-base font-medium transition-colors hover:bg-muted ${
                                pathname === '/watchlist'
                                    ? 'text-primary'
                                    : 'text-foreground'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Watchlist
                        </Link>
                        <div className="py-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>
                        </div>
                        <div className="py-2">
                            <button
                                className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
