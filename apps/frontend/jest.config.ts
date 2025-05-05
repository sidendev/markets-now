import { Config } from 'jest';
import nextJest from 'next/jest.js';
import path from 'path';

// using absolute path to ensure next.js can find the app directory
const createJestConfig = nextJest({
    dir: path.join(__dirname, './'),
});

const config: Config = {
    displayName: 'frontend',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/_*.{js,jsx,ts,tsx}',
    ],
};

export default createJestConfig(config);
