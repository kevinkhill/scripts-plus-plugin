const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const fromHere = p => path.resolve(__dirname, p);

module.exports = {
  entry: fromHere('src/index.js'),
  mode: 'development',
  devtool: false,
  output: {
    path: fromHere('Properties'),
    filename: 'ScriptsPlus.js',
    library: 'ScriptsPlus',
    libraryTarget: 'var'
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          'compile.bat',
          'reload_s+.bat'
        ]
      }
    })
  ],
  externals: {
    clr: "clr"
  },
  resolve: { 
    extensions: [".js"],
    fallback: {
      fs: "empty",
      path: "empty"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};