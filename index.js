module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "semi": ["warn", "never"],
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
    "comma-dangle": ["error", "never"],
    "max-len": ["error", 100, 2, {
      "ignoreUrls": true,
      "ignoreComments": true,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }]
  }
}
