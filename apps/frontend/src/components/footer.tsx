'use client';

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background/95 py-6">
            <div className="flex flex-row items-center justify-between px-6 max-w-[1440px] mx-auto">
                <div className="text-sm text-muted-foreground">
                    © MarketsNow 2025
                </div>
                <div>
                    <button
                        className="h-9 px-4 py-2 bg-muted text-muted-foreground hover:bg-muted/80 transition-colors rounded-md text-sm font-medium cursor-pointer"
                        aria-label="Sign up"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </footer>
    );
}
