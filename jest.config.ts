module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Specify the coverage directory
  coverageThreshold: {
    // Set coverage thresholds
    global: {
      branches: 80, // Example threshold: 80% branch coverage
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/fileMock.tsx',
    '\\.(jpg|jpeg|png|gif|webp|svg|mp4)$': '<rootDir>/__mocks__/fileMock.tsx',
  },
};

export {};
