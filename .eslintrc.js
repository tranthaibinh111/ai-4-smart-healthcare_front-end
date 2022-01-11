module.exports = {
  settings: {
    'import/resolver': {
      node: { paths: ['src'] },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': [
      0,
    ],
    // https://eslint.org/docs/rules/no-param-reassign#props
    'no-param-reassign': [
      'error',
      { props: false },
    ],
    // https://eslint.org/docs/rules/curly#multi-or-nest
    curly: [
      'error',
      'multi-or-nest',
    ],
    // https://eslint.org/docs/rules/nonblock-statement-body-position#nonblock-statement-body-position
    'nonblock-statement-body-position': [
      'error',
      'below',
    ],
    // https://eslint.org/docs/rules/no-plusplus#allowforloopafterthoughts
    'no-plusplus': [
      'error',
      { allowForLoopAfterthoughts: true },
    ],
    'react/no-array-index-key': [
      0,
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md#rule-options
    'react/forbid-prop-types': [
      'error',
      { forbid: ['any'] },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md#rule-options
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        exceptions: ['Swiper'],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': [
      0,
    ],
    // https://github.com/import-js/eslint-plugin-import/blob/v2.25.3/docs/rules/prefer-default-export.md
    'import/prefer-default-export': [
      0,
    ],
    // https://eslint.org/docs/rules/object-curly-newline#options
    'object-curly-newline': [
      0,
    ],
  },
};
