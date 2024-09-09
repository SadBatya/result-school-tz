module.exports = {
  '!(lint-staged.config)/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix --max-warnings=0',
  ],
}
