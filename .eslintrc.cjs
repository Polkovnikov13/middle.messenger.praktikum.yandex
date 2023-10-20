module.exports ={
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "extends": [
   "eslint:recommended",
   "plugin:@typescript-eslint/recommended",
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "max-len": [2, 120],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions":0,
    "@typescript-eslint/no-unused-vars":0,
    "@typescript-eslint/no-explicit-any":0,
  }
}
