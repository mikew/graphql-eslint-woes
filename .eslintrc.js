/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      // The @graphql-eslint plugin is strange in that you add an extra
      // processor to your source files. This processor then parses the files
      // and sends embedded gql template tags to eslint as a .graphql file.
      // All rules in the .graphql section below are then applied.
      files: ["*.tsx", "*.ts", "*.jsx", "*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        // Helps in the long run.
        "@graphql-eslint/require-deprecation-reason": "warn",
        "@graphql-eslint/no-deprecated": "warn",
        "@graphql-eslint/no-anonymous-operations": "warn",

        // Debatable.
        "@graphql-eslint/require-id-when-available": "warn",

        // User error.
        "@graphql-eslint/avoid-duplicate-fields": "error",
        "@graphql-eslint/no-unused-variables": "error",
        "@graphql-eslint/unique-argument-names": "error",
        "@graphql-eslint/unique-field-definition-names": "error",
        "@graphql-eslint/unique-input-field-names": "error",
        "@graphql-eslint/unique-variable-names": "error",
        "@graphql-eslint/unique-fragment-name": "error",
        "@graphql-eslint/unique-operation-name": "error",

        // Type checking.
        "@graphql-eslint/known-argument-names": "error",
        "@graphql-eslint/no-undefined-variables": "error",
        "@graphql-eslint/provided-required-arguments": "error",
        "@graphql-eslint/variables-are-input-types": "error",
        "@graphql-eslint/fields-on-correct-type": "error",
        "@graphql-eslint/known-fragment-names": "error",
      },
    },
  ],

  parserOptions: {
    schema: "src/graphql.schema.json",
    operations: "src/**/*.{graphql,js,jsx,ts,tsx}",
  },
};
