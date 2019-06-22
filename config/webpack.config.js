var path = require('path');
const nodeExternals = require('webpack-node-externals')
const VariableStore = require('./VariableStore.json');

module.exports = {
    mode: 'production',
    entry: '../bin/www',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    context: path.resolve(__dirname),
    node: {
        __dirname: true
    },
    // devtool: 'inline-source-map',
    // mode: 'development',
    // entry: [
    //     path.join(__dirname, '/bin/www')
    // ],
    target: 'node',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     publicPath: '/public/',
    //     filename: 'bundle.js'
    // },
    module: {
        rules: [

            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-loader",
                        //options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}