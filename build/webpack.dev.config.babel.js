import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.config.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = merge(common,{
    mode: 'development',

	devtool: 'cheap-module-source-map',

	devServer: {
		contentBase: path.join(__dirname, '../dist/'),
		publicPath: '/assets_dev/scripts/',
		host: '0.0.0.0',
		port: 8000,
		index: 'index_dev.html',
		useLocalIp: true,
		writeToDisk: true,
		hot: true,
		historyApiFallback: true,
		stats: 'errors-only',
		clientLogLevel: 'warning'
	},
	
	output: {
		path: path.join(__dirname, '../dist/assets_dev/scripts'),
		publicPath: '/assets_dev/scripts/',
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: '../../index_dev.html',
			inject: false
		})
	]
})