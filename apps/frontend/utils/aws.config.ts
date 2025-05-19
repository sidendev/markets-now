import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '',
            loginWith: {
                oauth: {
                    domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || '',
                    scopes: ['email', 'openid', 'phone'],
                    redirectSignIn: ['http://localhost:3000/'],
                    redirectSignOut: ['http://localhost:3000/'],
                    responseType: 'code',
                },
                username: true,
                email: true,
            },
        },
    },
});
