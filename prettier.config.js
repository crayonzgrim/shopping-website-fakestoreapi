const options = {
  arrowParens: 'always',
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80
};

module.exports = {
  options,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
};
