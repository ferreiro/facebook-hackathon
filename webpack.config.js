const path = require('path');


module.exports = {
    entry: {
        client: './client',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'server/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}