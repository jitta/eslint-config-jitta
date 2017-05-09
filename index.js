module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "semi": 0,
    "no-underscore-dangle": 0,
    "comma-dangle": 0,
    "camelcase": 0,
    "no-undef": 0,
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": 0,
  },
}
