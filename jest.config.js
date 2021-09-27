module.exports = {
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  watchPathIgnorePatterns: ['globalConfig'],
  roots: [
    '<rootDir>/tests'
  ],
  // testEnvironment: 'jest-environment-node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
