module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars":'off', // 변수 선언만 하고 싶을 경우(할당안해도 오류 X)
        "no-undef":'off'    // 선언 안한것도 오류 x
    }
}
