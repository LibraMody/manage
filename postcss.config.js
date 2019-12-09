import postcssPresetEnv from 'postcss-preset-env';


module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 0
        })//stage：0，包含1，2，3
    ]
}
  