import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = { 
    context: path.resolve(__dirname, '../src'),

    entry: './main',

    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        },

        extensions: ['.js', '.vue'],

        modules: [
            path.resolve(__dirname, '../node_modules'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
					shadowMode: true
				}
            },

            {
				test: /\.css$/,
				use: [
					{
						loader: 'vue-style-loader'
					},
					{
						loader: 'css-loader'
                    }, 
                    {
                        loader: 'postcss-loader'
                    }                  
				]
            },
            
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'responsive-loader',
                            quality: 85,
                        },
                    }
                   
                ]
              }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: '../src/img/carousel', 
                to: '../../img'
            }
        ])
    ]
}