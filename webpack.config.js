const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require("path");
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname,'./src'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      camelCase: true,
                      sourceMap: true
                    }
                  }
                ]                
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname,'./src'),
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]                
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname,'./asset'),
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname,'./asset'),
                use: [
                'file-loader'
                ]
            }                        
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico'
        }),
        new ManifestPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: false
    },
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
    }
}