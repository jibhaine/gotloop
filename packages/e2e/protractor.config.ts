import { Config } from "protractor";

exports.config = {
  // set to "custom" instead of cucumber.
  framework: "custom",

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // require feature files
  specs: [
    "src/features/**/*.feature", // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      "src/step-defs/**/*.steps.js", // accepts a glob
    ],
  },
} as Config;
