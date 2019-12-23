module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: false,
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  roots: [
    '<rootDir>/tests/unit',
  ],
  coverageReporters: [
    'text-summary',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/\\.cache/',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
