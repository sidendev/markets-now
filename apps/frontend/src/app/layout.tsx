import { Header } from '../components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'MarketsNow - Real-time Market Tracking',
    description:
        'Track real-time market prices and set alerts for stock price notifications',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} dark`}>
            <body className="min-h-screen bg-background font-sans antialiased">
                <div className="relative flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                </div>
            </body>
        </html>
    );
}
