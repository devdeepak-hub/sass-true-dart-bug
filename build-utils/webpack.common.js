const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/**
* CleanWebPackPlugin : It cleans the dist folder
* svg-sprite-loader[Not installed now] : make svg to use in our JS code, and convert all the svg into svg sprite
*/

module.exports = {
	entry : './src/index.js',
	output: {
		filename: 'name[bundle].js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
        	contentBase: './dist',
   	},
	module : {
		rules: [
			{
                		test: /\.(js|jsx)$/,
                		exclude: /(node_modules|bower_components)/,
                		loader: "babel-loader",
                		options: { presets: ["@babel/env"] }
            		},

			{
                		test: /\.s[ac]ss$/i,
                		use: [
                    			MiniCssExtractPlugin.loader,
                    			'css-loader',
					'postcss-loader',
                    			'sass-loader'
                		],
            		},
			{
                		test: /\.(png|jpg|gif)$/,
                		use: [
                    			'file-loader',
                		],
            		},
		]
	},

	plugins: [
        	new CleanWebpackPlugin(),
        	new HtmlWebpackPlugin({
            		title: 'React Setup with Typescript',
            		template : 'public/index.html'

        	}),
        	new MiniCssExtractPlugin(),
   	],

}

