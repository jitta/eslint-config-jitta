module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "semi": ["warn", "never"],
    "no-underscore-dangle": "off",
    "comma-dangle": "off",
    "camelcase": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": "off"
  }
}
