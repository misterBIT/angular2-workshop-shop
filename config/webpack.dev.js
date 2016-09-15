const defaultConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

// Webpack dev Config
const webpackConfig = {
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills'], minChunks: Infinity}),],
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'main': './src/main.ts'
	},
	output: {
		path: './dist'
	},
	module: {
		preLoaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "tslint"
			}
		]
	}
};


module.exports = webpackMerge(defaultConfig, webpackConfig);