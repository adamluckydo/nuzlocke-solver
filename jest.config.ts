import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  globals: {
    "ts-jest": {
      packageJson: "package.json",
    },
  },
};

export default config;
