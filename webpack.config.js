var webpack = require("webpack");
var path = require("path");

module.exports = {
	target: "web",
	cache: false,
	context: __dirname,
	debug: false,
	devtool: false,
	entry: ["./js/demo"],
	output: {
		path: path.join(__dirname, "js"),
		filename: "build.min.js"
	},
	plugins: [
		new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: []
	}
};
