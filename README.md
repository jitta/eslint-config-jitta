# Linter config for JavaScript universal development

## Installation

```bash
(
  export PKG=eslint-config-jitta;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

Add the extends to your .eslintrc

```js
{
    "extends": "jitta"
}
```