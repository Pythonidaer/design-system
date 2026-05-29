/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // Enforce token usage — no hardcoded color values
    'no-restricted-syntax': [
      'error',
      {
        selector: 'JSXAttribute[name.name="style"]',
        message:
          'Inline styles are not allowed. Use CSS Modules and design tokens instead.',
      },
    ],

    // No explicit any
    '@typescript-eslint/no-explicit-any': 'error',

    // Ensure all React components have explicit return types
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React 18+ — JSX transform does not require React in scope
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // Accessibility
    'jsx-a11y/anchor-is-valid': 'warn',

    // General quality
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
  },
  settings: {
    react: { version: 'detect' },
  },
  overrides: [
    {
      files: ['*.stories.tsx', '*.stories.ts'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.test.tsx', '*.test.ts', '*.a11y.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
