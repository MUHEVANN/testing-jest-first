import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx,astro}", // Include semua file .ts, .tsx, .js, .jsx, dan .astro di dalam folder src
    "!<rootDir>/src/**/*.test.{ts,tsx,js,jsx,astro}", // Exclude file test .ts, .tsx, .js, .jsx, dan .astro
    "!<rootDir>/src/**/*.spec.{ts,tsx,js,jsx,astro}", // Exclude file spec .ts, .tsx, .js, .jsx, dan .astro
  ],
};

export default config; // Atau gunakan module.exports = config jika Anda menggunakan CommonJS
