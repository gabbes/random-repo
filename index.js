module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module"
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-native-a11y/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],

  plugins: [
    "import",
    "import-order-alphabetical",
    "react-hooks",
    "react-native",
    "react-native-a11y"
  ],

  env: {
    "react-native/react-native": true
  },

  settings: {
    react: {
      version: "detect"
    }
  },

  rules: {
    // @typescript-eslint
    "@typescript-eslint/explicit-function-return-type": [
      1,
      { allowExpressions: true, allowTypedFunctionExpressions: true }
    ],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,

    // import
    "import/first": 1,
    "import/newline-after-import": 1,
    "import/no-cycle": 2,
    "import/no-default-export": 1,
    "import/no-duplicates": 1,

    // import-order-alphabetical
    "import-order-alphabetical/order": 1,

    // react
    "react/prop-types": 0,

    // react-hooks
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,

    // react-native
    "react-native/no-unused-styles": 1,
    "react-native/no-single-element-style-arrays": 1
  },

  overrides: [
    {
      files: ["./App.tsx"],
      rules: {
        "import/no-default-export": 0
      }
    }
  ]
};
