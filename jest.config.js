const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1'
  },
  preset: 'ts-jest',
  rootDir: root,
  testEnvironment: "node",
  testMatch: [
    '<rootDir>/test/**/*.spec.ts'
  ],
};
