module.exports = {
  // Specifies the preset to use, in this case, "ts-jest" for TypeScript
  preset: "ts-jest",

  // The environment in which Jest should run the tests
  testEnvironment: "node",

  // Specify the root directory for Jest to search for files in
  rootDir: "./src",

  // An array of file extensions that Jest will look for when it's searching for test files
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],

  // An array of regex patterns specifying test files to match
  testRegex: ["_test.ts$"],

  // An array of regex patterns that Jest will ignore
  testPathIgnorePatterns: ["/node_modules/"],

  // Specifies the timeout for each test, in milliseconds
  testTimeout: 30000,
};
