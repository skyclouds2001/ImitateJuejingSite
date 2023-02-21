const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/{unit,components}/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
}

module.exports = createJestConfig(customJestConfig)
