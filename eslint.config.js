import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { fixupConfigRules } from '@eslint/compat';

export default [
  {
    ignores: ['node_modules/*', '__build__/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        vi: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
  },
  {
    rules: {
      'arrow-parens': ['error', 'always'],
      'no-console': ['error'],
      'max-len': ['error', { 'code': 120, 'ignoreComments': true }],
      'no-restricted-syntax': ['error', 'FunctionDeclaration'],
      'no-unused-vars': ['error', { 'caughtErrors': 'none' }],
      'quotes': ['error', 'single'],
      'react/jsx-uses-react': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'semi': ['error', 'always'],
      'semi-style': ['error', 'last'],
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
];
