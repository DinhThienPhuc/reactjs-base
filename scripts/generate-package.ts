import * as fs from "fs";
import * as path from "path";

/**
 * Define the function to generate package
 * @param packageName string
 */
const generatePackage = (packageName: string) => {
  if (!packageName) {
    throw new Error("Package name is required!");
  }

  let packageFolder = packageName;
  if (!packageName.includes(".")) {
    packageFolder = `${packageName}.main`;
  }

  /**
   * Create package directory
   */
  const dirPath = `packages/${packageFolder.replace(".", "/")}`;
  fs.mkdirSync(dirPath, { recursive: true });

  /**
   * Generate tsconfig.json file for package
   */
  const tsconfigContent = packageName.includes("components")
    ? `
{
  "extends": "../../tsconfig.base.json",
  "include": ["./src"],
  "exclude": ["./src/_stories.tsx"]
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
  "name": "@phantomthief-react/${packageName}",
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
  fs.mkdirSync(path.join(dirPath, "src"), { recursive: true });

  /**
   * Generate files for component package
   */
  if (packageName.includes("components.")) {
    fs.writeFileSync(path.join(dirPath, "src", "_components.tsx"), "");
    fs.writeFileSync(path.join(dirPath, "src", "_constants.ts"), "");
    fs.writeFileSync(path.join(dirPath, "src", "_stories.tsx"), "");
    fs.writeFileSync(path.join(dirPath, "src", "_style.ts"), "");
    fs.writeFileSync(path.join(dirPath, "src", "_types.ts"), "");
  }

  /**
   * Generate files for hook package
   */
  if (packageName.includes("hooks.")) {
    fs.writeFileSync(path.join(dirPath, "src", "_hook.ts"), "");
  }

  /**
   * Always generate index.ts file for package
   */
  fs.writeFileSync(path.join(dirPath, "src", "index.ts"), "");

  console.log(`Package ${packageName} has been generated successfully!`);
};

/**
 * Execute the script
 */
const [, , packageName] = process.argv;

generatePackage(packageName);
