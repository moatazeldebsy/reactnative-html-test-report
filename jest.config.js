module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: './reports/coverage',
  coverageReporters: ['text', 'lcov'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports',
        filename: 'report.html',
        expand: true,
      },
    ],
  ],
};
