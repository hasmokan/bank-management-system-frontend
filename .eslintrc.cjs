/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    parser: 'babel-eslint', //解析器，默认使用Espree
    ecmaVersion: 6, //支持es6语法，但并不意味着同时支持新的ES6全局变量或类型（比如 Set等类型）
    sourceType: 'module',  //指定来源的类型，"script(默认)"或"module"(如果你的代码是ECMAScript模块)
    //使用的额外的语言特性
    ecmaFeatures: {
      jsx: true,  //启用JSX
      globalReturn: true,  //允许在全局作用域下使用 return 语句
      impliedStrict: true,  //启用全局 strict mode （如果 ecmaVersion 是5或更高）
      experimentalObjectRestSpread: true,  //启用实验性的 object rest/spread properties 支持。（重要：这是一个实验性的功能，在未来可能会有明显改变。建议你写的规则不要依赖该功能，除非当它发生改变时你愿意承担维护成本。）
    }
  }
}
