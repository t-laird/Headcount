module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "arrowFunctions":true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "key-spacing": [
            "error", {
            "beforeColon": false,
            "afterColon": true
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "newline-after-var": [
        "error",
        "always"
        ],
        "semi": [
            "error",
            "always"
        ],
        "globals": {
            "mount": true
        }
    }
};