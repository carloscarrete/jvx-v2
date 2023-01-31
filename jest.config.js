module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/__tests__/fixtures/',
    ],
    transformIgnorePatterns: [],
}

