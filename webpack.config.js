var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack Config
var webpackConfig = {
	context: __dirname,
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'main': './src/main.ts'
	},

	output: {
		path: './dist'
	},
	plugins: [
		new CopyWebpackPlugin([{from: 'public/', to: '.'}]),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills'], minChunks: Infinity}),
	],

	module: {
		preLoaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "tslint"
			}
		],
		loaders: [
			// .ts files for TypeScript
			{test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
			{test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
			{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{test: /\.scss$/, loaders: ["to-string-loader", "css", 'resolve-url', "sass"]},
			{test: /\.html$/, loader: 'raw-loader'}
		]
	}

};


// Our Webpack Defaults
var defaultConfig = {
	devtool: 'cheap-module-source-map',
	cache: true,
	debug: true,
	output: {
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		root: [path.join(__dirname, 'src')],
		extensions: ['', '.ts', '.js']
	},

	devServer: {
		historyApiFallback: true,
		watchOptions: {aggregateTimeout: 300, poll: 1000}
	},

	node: {
		global: 1,
		crypto: 'empty',
		module: 0,
		Buffer: 0,
		clearImmediate: 0,
		setImmediate: 0
	}
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);