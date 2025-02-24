import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get current directory and filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Create the ESLint configuration
const eslintConfig = [
  // Extend the base ESLint configuration for Next.js and TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Override specific rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",  // Disable the 'any' type rule
      // "@typescript-eslint/no-explicit-any": "warn",  // If you prefer a warning instead of off
    },
  },
];

export default eslintConfig;
