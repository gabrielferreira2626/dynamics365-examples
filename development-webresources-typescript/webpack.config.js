const path = require('path');
const glob = require('glob');

const entries = glob.sync('../development-webresources-typescript/Resources/Forms/*.ts').reduce((acc, filePath) => {
  const entryName = path.basename(filePath, '.ts'); 
  acc[entryName] = './' + filePath;
  return acc;
}, {});

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'none',
};
