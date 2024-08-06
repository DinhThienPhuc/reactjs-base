module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^[a-z]", "^@(.*)$", "^@phantompurr-react(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  endOfLine: "auto",
};
