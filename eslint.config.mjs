import pluginPromise from "eslint-plugin-promise";
import pluginImport from "eslint-plugin-import";
import config from "eslint-config-standard";
import pluginN from "eslint-plugin-n";

const { env, parserOptions, globals: oldGlobals, ...restConfig } = config;

// Convert `env` to `globals`
const globals = Object.entries(env).reduce((acc, [key, value]) => {
  if (value) {
    acc[key] = "readonly";
  }
  return acc;
}, {});

// Merge old globals with new globals
const mergedGlobals = { ...oldGlobals, ...globals };

// Convert `plugins` to an object
const pluginsObject = {
  import: pluginImport,
  n: pluginN,
  promise: pluginPromise,
};

export default [
  ...[].concat({
    ...restConfig,
    languageOptions: {
      parserOptions,
      globals: mergedGlobals,
    },
    plugins: pluginsObject,
    rules: {
      indent: "off",
      quotes: ["warn", "double"],
      semi: ["warn", "always"],
      // "@typescript-eslint/no-explicit-any": "error",
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "error",
      // "no-unused-vars": "off",
      // "@typescript-eslint/no-unused-vars": [
      //   "warn",
      //   { argsIgnorePattern: "^_" },
      // ],
      // "no-console": "warn",
      // "@typescript-eslint/no-non-null-assertion": "off",
    },
  }),
];
