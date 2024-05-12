import { Plugin, UserConfig } from "vite";

import { PluginOptions } from "vite-plugin-dts";
import viteReact from "@vitejs/plugin-react";
import { resolve } from "path";

const resolveExternal = (pkg: Record<string, unknown>) => {
  const defaultExternal = [
    "react",
    "react/jsx-runtime",
    "react-dom",
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
    plugins: [reactPlugin(), dtsPlugin({ include: ["src"] })],
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
