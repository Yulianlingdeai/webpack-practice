module.exports = {
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        // 添加您的规则配置
    }
};
