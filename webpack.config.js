const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
	entry: {
		background_script: './src/background_script.js',
		content_script: './src/content_script.js',
		pageAction: './src/pageAction/script.js',
		options: './src/options/script.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: false,

	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

		new HtmlWebpackPlugin({
			inject: true,
			chunks: ['pageAction'],
			template: './src/pageAction/index.html',
			filename: 'pageAction/index.html'
		}),
		new HtmlWebpackPlugin({
			inject: true,
			chunks: ['options'],
			template: './src/options/index.html',
			filename: 'options/index.html'
		}),


		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/manifest.json' },
				{ from: './src/icons/icon.png', to: 'icons/icon.png' },

			],
		}),
	],

	mode: 'development'
};