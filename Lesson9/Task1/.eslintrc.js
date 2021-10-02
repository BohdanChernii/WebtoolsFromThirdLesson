module.exports = {
    extends:'eslint-config-airbnb-base',
    parserOptions: {
        ecmaVersion: 10,
        sourceType: "module"
    },
    rules: {
        'no-console':2,
    },
    globals: {
        document: true, 
        alert:true,
    }
};
