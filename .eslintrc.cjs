module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off', // props spreading을 허용
    'react/prop-types': 'off', // prop-types 사용을 강제하지 않음
    'react/no-unused-prop-types': 'off', // 사용되지 않는 prop-types 경고를 무시
    'react/no-unknown-property': 'off', // 알 수 없는 속성 경고를 무시
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
