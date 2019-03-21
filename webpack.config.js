const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
            'replaceLoader',
          {
            loader: 'myLoader',
            options: {
              name: '超级赛亚人之布罗利'
            }
          }
        ]
      }
    ]
  }
}