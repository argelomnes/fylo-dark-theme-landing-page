const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 0,
            features: {
                'nesting-rules': true
            },
            autoprefixer: { grid: true }
        }),
        atImport({
            path: ['postcss']
        })
    ]
};
