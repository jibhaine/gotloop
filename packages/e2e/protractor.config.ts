exports.config = {
  // set to "custom" instead of cucumber.
  framework: "custom",

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // require feature files
  specs: [
    "path/to/feature/files/**/*.feature", // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      "path/to/step/definitions/**/*.steps.js", // accepts a glob
    ],
  },
};
