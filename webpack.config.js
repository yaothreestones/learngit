var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        entry: './src/entry.js',
        jquery: ['jquery'] //公共文件
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /template\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                query: {
                    name: 'static/img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        } //这里可以简单理解为，如果css文件中有import 进来的文件也进行处理
                    }, {
                        loader: 'postcss-loader',
                        options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: function (loader) {
                                [
                                    // require('postcss-import')({root: loader.resourcePath}),
                                    require('autoprefixer')() //CSS浏览器兼容
                                    // require('cssnano')()  //压缩css
                                ]
                            }
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?minimize", 'sass-loader']
                })
            },
            {
                test: /\.woff$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.svg/,
                loader: "url?limit=10000&minetype=application/font-svg"
            },
            {
                test: /\.eot/,
                loader: "url?limit=10000&minetype=application/font-eot"
            },
            {
                test: /\.woff2$/,
                loader: "url?limit=10000&minetype=application/font-woff2"
            },
            {
                test: /\.ttf/,
                loader: "url?limit=10000&minetype=application/font-ttf"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new htmlWebpackPlugin({
            favicon: './src/favicon.ico',
            filename: "./index.html",
            template: "./src/template.html",
            inject: 'body' //将js文件插入body文件内
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.optimize.CommonsChunkPlugin('commons'),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(
            ['docs'], {
                root: __dirname,
                verbose: true,
                dry: false,
                watch: true
            }
        )
    ]
};