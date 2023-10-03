module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import-helpers"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          "/^react+$/",
          ["/^react-?/", "module"],
          "/@gympass/",
          "/^(@shared|@services|@routes|@assets|@screens|@context|@theme)/?.*/",
          ["parent", "sibling"],
          "/types/",
          "/styles/",
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
