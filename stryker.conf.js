// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function(config) {
  config.set({
    mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],
    mutator: 'typescript',
    testRunner: 'jest',
    timeoutMS: 15000,
    reporters: ['progress', 'clear-text'],
    thresholds: {
      high: 90,
      low: 80,
      break: 75,
    },
    logLevel: 'error',
    coverageAnalysis: 'off',
  });
};
