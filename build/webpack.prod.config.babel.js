import path from 'path';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import common from './webpack.common.config.babel';

module.exports = merge(common, {
    mode: 'production',

	output: {
		path: path.join(__dirname, '../dist/assets/scripts'),
		publicPath: '/assets/scripts/',
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				sourceMap: false
			})
		]
	}
})
    