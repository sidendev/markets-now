'use client';

import Link from 'next/link';
import { useAuth } from '../context/auth-context';

export function Footer() {
    const { isAuthenticated } = useAuth();

    // footer component wip
    return (
        <footer className="bg-gray-100 py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 text-sm">
                            © 2025 MarketsNow
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {isAuthenticated && (
                            <Link
                                href="/account"
                                className="text-gray-600 hover:text-blue-600 text-sm"
                            >
                                Account Settings
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
