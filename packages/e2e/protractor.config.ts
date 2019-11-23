import { Config } from 'protractor';

exports.config = {
  // set to 'custom' instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // docker selenium hub config
  seleniumAddress: 'http://selenium:4444/wd/hub',
  baseUrl: 'http://www.gotloop',

  // require feature files
  specs: [
    'src/features/**/*.feature', // accepts a glob
  ],
  // browser config
  capabilities: {
    browserName: 'chrome',
    args: ['no-sandbox'],
  },

  cucumberOpts: {
    format: ['json:results.json'],
    // require step definitions
    require: [
      'src/step-defs/**/*.steps.js', // accepts a glob
    ],
  },
} as Config;
