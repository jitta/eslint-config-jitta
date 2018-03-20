module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "flowtype",
    "jest"
  ],
  "env": {
    "jest/globals": true
  },
  "rules": {
    "semi": ["warn", "never"],
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
    "comma-dangle": ["error", "never"],
    "prefer-destructuring": "off",
    "function-paren-newline": "off"
  }
}
