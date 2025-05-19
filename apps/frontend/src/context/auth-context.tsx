'use client';

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';
import {
    signIn,
    signOut,
    signUp,
    confirmSignUp,
    getCurrentUser,
    fetchUserAttributes,
    fetchAuthSession,
    type SignUpInput,
    type SignInInput,
} from 'aws-amplify/auth';

interface UserAttributes {
    email?: string;
    username?: string;
    sub?: string;
    [key: string]: string | number | boolean | undefined;
}

interface User {
    username: string;
    attributes?: UserAttributes;
    userId?: string;
    [key: string]: string | UserAttributes | undefined;
}

type AuthError = Error & {
    message: string;
    code?: string;
};

interface AuthResponse {
    isSignedIn?: boolean;
    nextStep?:
        | {
              signInStep?: string;
          }
        | Record<string, unknown>;
    [key: string]: unknown;
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    signInUser: (data: SignInInput) => Promise<AuthResponse>;
    signUpUser: (data: SignUpInput) => Promise<AuthResponse>;
    confirmSignUpUser: (
        username: string,
        code: string
    ) => Promise<AuthResponse>;
    signOutUser: () => Promise<void>;
    error: string | null;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
    signInUser: async () => ({}),
    signUpUser: async () => ({}),
    confirmSignUpUser: async () => ({}),
    signOutUser: async () => {},
    error: null,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        checkUserAuthentication();
    }, []);

    const checkUserAuthentication = async () => {
        setIsLoading(true);
        try {
            const { tokens } = await fetchAuthSession();

            if (tokens) {
                setIsAuthenticated(true);

                const currentUser = await getCurrentUser();
                const attributes = await fetchUserAttributes();

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { signInDetails, ...userWithoutSignInDetails } =
                    currentUser;
                setUser({
                    ...userWithoutSignInDetails,
                    attributes: attributes as UserAttributes,
                });
            }
        } catch {
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // sign in function
    const signInUser = async (data: SignInInput) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await signIn(data);

            if (result?.isSignedIn) {
                setIsAuthenticated(true);
                await checkUserAuthentication();
            }
            return result;
        } catch (err: unknown) {
            const authError = err as AuthError;
            setError(authError.message || 'Error signing in');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // sign up function
    const signUpUser = async (data: SignUpInput) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await signUp(data);
            return result;
        } catch (err: unknown) {
            const authError = err as AuthError;
            setError(authError.message || 'Error signing up');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // confirm sign up function
    const confirmSignUpUser = async (username: string, code: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await confirmSignUp({
                username,
                confirmationCode: code,
            });
            return result;
        } catch (err: unknown) {
            const authError = err as AuthError;
            setError(authError.message || 'Error confirming sign up');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    // sign out function
    const signOutUser = async () => {
        setIsLoading(true);
        setError(null);

        try {
            await signOut();
            setIsAuthenticated(false);
            setUser(null);
        } catch (err: unknown) {
            const authError = err as AuthError;
            setError(authError.message || 'Error signing out');
        } finally {
            setIsLoading(false);
        }
    };

    const value: AuthContextType = {
        isAuthenticated,
        isLoading,
        user,
        signInUser: async (data) => {
            const result = await signInUser(data);
            return result as unknown as AuthResponse;
        },
        signUpUser: async (data) => {
            const result = await signUpUser(data);
            return result as unknown as AuthResponse;
        },
        confirmSignUpUser: async (username, code) => {
            const result = await confirmSignUpUser(username, code);
            return result as unknown as AuthResponse;
        },
        signOutUser,
        error,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
