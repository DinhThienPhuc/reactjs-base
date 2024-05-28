// lint-staged.config.js
module.exports = {
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `pnpm eslint --fix ${filenames.join(" ")}`,
    `pnpm prettier --write ${filenames.join(" ")}`,
  ],

  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "tsc-files --noEmit",
};
