const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
	entry: {
		background_script: './src/background_script.ts',
		content_script: './src/contentScripts/content_script.ts',
		pageAction: './src/pageAction/script.ts',
		options: './src/options/script.ts',
		summaryModal: './src/contentScripts/summaryModal.ts',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ['@babel/preset-typescript', '@babel/preset-env'],
					plugins: [
						["@babel/transform-runtime"]
					]
				}
			}
		},
		{
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions:
						{
							plugins: ['postcss-preset-env', 'autoprefixer']
						}
					}

				},
				// {
				// 	loader: 'sass-loader'
				// }


			]
		}
		],
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
		new HtmlWebpackPlugin({
			inject: false,
			chunks: ["summaryModal"],
			template: './src/contentScripts/summaryModal.html',
			filename: 'summaryModal.html'
		}),


		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/manifest.json' },
				{ from: './src/icons/icon.png', to: 'icons/icon.png' },
				// { from: './src/css/*.css', to: '[name].css' },

			],
		}),
	],

	mode: 'development'
};