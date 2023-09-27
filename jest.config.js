// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require("jest-config");

/** @type {import('jest').Config} */

const config = {
  ...defaults,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!src/**/*.types.{ts,tsx}",
    "!src/**/types.{ts,tsx}",
    "!src/**/definations/*",
    "!src/**/style.{ts,tsx}",
    "!src/app.{ts,tsx}",
    "!src/service-worker.ts",
    "!src/serviceWorkerRegistration.ts",
    "!src/react-app-env.d.ts",
    "!src/**/*/index.ts",
    "!src/index.tsx",
    "!src/api/request.ts",
  ],
};

module.exports = config;
