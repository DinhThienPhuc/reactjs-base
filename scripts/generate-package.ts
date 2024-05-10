import * as path from "path";
import * as fs from "fs";

/**
 * Define the function to generate package
 * @param packageName string
 */
const generatePackage = (packageName: string) => {
  /**
   * Create package directory
   */
  const dirPath = `packages/${packageName}`;
  fs.mkdirSync(dirPath, { recursive: true });

  /**
   * Generate tsconfig.json file for package
   */
  const tsconfigContent = packageName.includes("components")
    ? `
{
  "extends": "../../tsconfig.base.json",
  "include": ["./src"],
  "exclude": ["./src/*.stories.tsx"]
}
`
    : `
{
  "extends": "../../tsconfig.base.json",
  "include": ["./src"],
}
`;

  const tsConfigFilePath = path.join(dirPath, "tsconfig.json");

  fs.writeFileSync(tsConfigFilePath, tsconfigContent);

  /**
   * Generate vite.config.ts file for package
   */
  const viteConfigContent = `
import createConfig from "../../vite.config.base";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

const config = createConfig(react, dts, pkg);

export default defineConfig(config);
`;

  const filePath = path.join(dirPath, "vite.config.ts");

  fs.writeFileSync(filePath, viteConfigContent);

  /**
   * Generate package.json file for package
   */
  const packageContent = `
{
  "name": "@phantomthief-react-${packageName}",
  "version": "0.0.1",
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "vite build --watch",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --max-warnings 0"
  },
  "peerDependencies": {
    "typescript": "*",
    "react": "*"
  },
  "author": "@DinhThienPhuc",
  "license": "ISC",
  "description": "",
  "sideEffects": false
}
`;

  const packageFilePath = path.join(dirPath, "package.json");

  fs.writeFileSync(packageFilePath, packageContent);

  /**
   * Generate `src` directory for package
   */
  fs.mkdirSync(path.join(dirPath, "src", "index.ts"), { recursive: true });
};

/**
 * Execute the script
 */
const [, , packageName] = process.argv;

generatePackage(packageName);
