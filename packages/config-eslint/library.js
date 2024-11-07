const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
    ].map(require.resolve), 
    "plugin:prettier/recommended",
    "turbo"
  ],
  rules: {
    "import/order": "error",
    "no-console": "warn",
    "import/no-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 100,
        proseWrap: "always",
        trailingComma: "es5",
        quotes: true,
        quoteProps: "consistent"
      }
    ]
  },
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
