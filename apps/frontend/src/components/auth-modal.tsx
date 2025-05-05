'use client';

import { useState } from 'react';

export function AuthModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [isLoginView, setIsLoginView] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md p-6 relative mx-auto my-auto overflow-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    aria-label="Close"
                >
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
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="mb-6 flex border-b">
                    <button
                        className={`py-2 px-4 text-sm font-medium ${
                            isLoginView ? 'border-b-2 border-primary' : ''
                        }`}
                        onClick={() => setIsLoginView(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`py-2 px-4 text-sm font-medium ${
                            !isLoginView ? 'border-b-2 border-primary' : ''
                        }`}
                        onClick={() => setIsLoginView(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {isLoginView ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Welcome back</h2>
                        <p className="text-sm text-muted-foreground">
                            Login to your account
                        </p>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>
                        </div>

                        <button className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer">
                            Login
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Create an account
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Sign up for MarketNow
                        </p>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    id="signup-email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-password"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="signup-confirm"
                                    className="text-sm font-medium"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    id="signup-confirm"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                />
                            </div>
                        </div>

                        <button className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer">
                            Create Account
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
