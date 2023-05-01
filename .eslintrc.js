module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "script"
    },
    "rules": {
        "camelcase": "error",
        "no-use-before-define": "error",
        "no-undef-init": "error",
        "no-unused-vars": "error",
        "prefer-const": "error",
        "strict": "error"
    }
}
