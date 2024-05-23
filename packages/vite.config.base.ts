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
  console.log(
    "process.env.ENABLE_ANALYZE, process.env.ENABLE_ANALYZE",
    process.env.ENABLE_ANALYZE,
  );
  return {
    plugins: [
      reactPlugin(),
      dtsPlugin({ include: ["src"] }),
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
