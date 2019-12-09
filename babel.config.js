module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: {
                version: 3
            }
        }] 
    ];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ];

    return {
        presets,
        plugins
    }
}
//配置归属