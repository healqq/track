const jestConfig = require('@shyftplan/js-config/jest/jest.config');
const path = require('path');

module.exports = {
  ...jestConfig,
  rootDir: path.resolve(__dirname, '../'),
  moduleNameMapper: {
    ...jestConfig.moduleNameMapper,
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^helpers/(.*)$': '<rootDir>/src/modules/helpers/$1',
  },
};
