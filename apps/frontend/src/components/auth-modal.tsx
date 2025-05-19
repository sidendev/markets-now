'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../context/auth-context';

export function AuthModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [isLoginView, setIsLoginView] = useState(true);
    const [mounted, setMounted] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState('');

    // auth context
    const { signInUser, signUpUser, confirmSignUpUser, isLoading } = useAuth();

    const [loginError, setLoginError] = useState('');

    // resetting form
    useEffect(() => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setShowConfirmation(false);
        setConfirmationCode('');
    }, [isLoginView]);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // prevents scrolling when modal is open
            document.body.style.overflow = 'hidden';

            // adds the body class that will be used to apply blur
            document.body.classList.add('modal-open');
        } else {
            // allows scrolling when modal is closed
            document.body.style.overflow = '';

            // removes the blur class
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    // handle login form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInUser({
                username: email,
                password,
            });
            // closing modal on successful login
            onClose();
        } catch (err: unknown) {
            console.error('Login failed:', err);
            if (err instanceof Error) {
                setLoginError(err.message || 'An error occurred during login');
                if (err.message?.includes('UserPool not configured')) {
                    setLoginError(
                        'Authentication service not properly configured. Please try again later.'
                    );
                }
            } else {
                setLoginError('An unexpected error occurred');
            }
        }
    };

    // handle sign up form submission
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            await signUpUser({
                username: email,
                password,
                options: {
                    userAttributes: {
                        email,
                    },
                },
            });
            setShowConfirmation(true);
        } catch (err) {
            console.error('Sign up failed:', err);
        }
    };

    const handleConfirmation = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await confirmSignUpUser(email, confirmationCode);
            setShowConfirmation(false);
            setIsLoginView(true);
        } catch (err) {
            console.error('Confirmation failed:', err);
        }
    };

    const modalContent = (
        <>
            {/* backdrop overlay with blur effect */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            {/* modal content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md p-6 overflow-auto max-h-[90vh] relative"
                    onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside modal
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer"
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

                    {loginError && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                            {loginError}
                        </div>
                    )}

                    {!showConfirmation ? (
                        <>
                            <div className="mb-6 flex border-b">
                                <button
                                    className={`py-2 px-4 text-sm font-medium cursor-pointer ${
                                        isLoginView
                                            ? 'border-b-2 border-primary'
                                            : ''
                                    }`}
                                    onClick={() => setIsLoginView(true)}
                                >
                                    Login
                                </button>
                                <button
                                    className={`py-2 px-4 text-sm font-medium cursor-pointer ${
                                        !isLoginView
                                            ? 'border-b-2 border-primary'
                                            : ''
                                    }`}
                                    onClick={() => setIsLoginView(false)}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {isLoginView ? (
                                <form
                                    onSubmit={handleLogin}
                                    className="space-y-4"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Welcome back
                                        </h2>
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
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                    required
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
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={isLoading}
                                        >
                                            {isLoading
                                                ? 'Logging in...'
                                                : 'Login'}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form
                                    onSubmit={handleSignUp}
                                    className="space-y-4"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-semibold">
                                            Create an account
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            Sign up for MarketsNow
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
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                    required
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
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                    required
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
                                                    value={confirmPassword}
                                                    onChange={(e) =>
                                                        setConfirmPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={isLoading}
                                        >
                                            {isLoading
                                                ? 'Creating account...'
                                                : 'Create Account'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    ) : (
                        <form
                            onSubmit={handleConfirmation}
                            className="space-y-4"
                        >
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">
                                    Confirm your account
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Please enter the verification code sent to
                                    your email
                                </p>

                                <div className="space-y-1">
                                    <label
                                        htmlFor="confirmation-code"
                                        className="text-sm font-medium"
                                    >
                                        Verification Code
                                    </label>
                                    <input
                                        id="confirmation-code"
                                        type="text"
                                        placeholder="Enter code"
                                        value={confirmationCode}
                                        onChange={(e) =>
                                            setConfirmationCode(e.target.value)
                                        }
                                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? 'Verifying...'
                                        : 'Verify Account'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );

    // stops rendering anything on server side
    if (!mounted) return null;

    // does not render if modal is not open
    if (!isOpen) return null;

    // using createPortal to render modal
    return createPortal(modalContent, document.body);
}
