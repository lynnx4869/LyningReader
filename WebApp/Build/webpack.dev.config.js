let path = require('path');
let webpack = require('webpack');
let CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {

    entry: {
        path: path.join(__dirname, '../SourceCode/App.tsx'),
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../../Server/static/')
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.png', '.jpg', '.json']
    },

    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },

    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.js$/,
                use: [
                    'source-map-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            compact: false
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '../SourceCode/index.html')
        }], {
            copyUnmodified: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "vendor.bundle.js"
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],

    devtool: 'source-map'
};