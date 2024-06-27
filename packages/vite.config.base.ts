import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import { visualizer } from "rollup-plugin-visualizer"; // Uncomment this line to generate statistics.html
import { PluginOptions } from "vite-plugin-dts";
import viteReact from "@vitejs/plugin-react";
import { Plugin, UserConfig } from "vite";
import { resolve } from "path";

const resolveExternal = (pkg: Record<string, unknown>) => {
  const defaultExternal = [
    "react",
    "react/jsx-runtime",
    "react-dom",
    "styled-components",
    /^@phantomthief-react\/(.*)/,
  ];

  return [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...defaultExternal,
  ];
};

const createConfig = (
  reactPlugin: typeof viteReact,
  dtsPlugin: (options?: PluginOptions) => Plugin,
  pkg: Record<string, unknown>,
  entries = [resolve("src/index.ts")],
): UserConfig => {
  return {
    plugins: [
      reactPlugin({
        babel: {
          plugins: [
            [
              "babel-plugin-styled-components",
              {
                displayName: true,
                pure: true,
              },
            ],
          ],
        },
      }),
      dtsPlugin({ include: ["src"] }),
      dynamicImportVars({}),
      process.env.ENABLE_ANALYZE
        ? visualizer({ filename: "./statistics.html" })
        : null,
    ],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    build: {
      lib: {
        entry: entries,
        formats: ["es", "cjs"],
        fileName: "[name]",
      },
      rollupOptions: {
        external: resolveExternal(pkg),
        output: {
          preserveModules: false,
        },
      },
    },
  };
};

export default createConfig;
