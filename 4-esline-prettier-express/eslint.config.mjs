import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("airbnb"),
  {
    languageOptions: { globals: globals.node },
    rules: {
      // Indentation rule: 2 spaces
      indent: ["error", 2],
      // Space before function parenthesis
      "space-before-function-paren": ["error", "always"],
      // No space inside parentheses
      "space-in-parens": ["error", "never"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
