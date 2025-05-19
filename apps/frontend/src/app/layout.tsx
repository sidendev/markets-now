import { Header } from '../components/header';
import { Footer } from '../components/footer';
import './globals.css';
import '../../utils/aws.config';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { AuthProvider } from '../context/auth-context';

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
                <AuthProvider>
                    <div className="relative flex min-h-screen flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
