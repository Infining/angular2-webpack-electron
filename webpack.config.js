var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const helpers = require('./config/helpers');

module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    '@angular': [
      'rxjs',
      'reflect-metadata',
      'zone.js'
    ],
    'common': ['es6-shim'],
    'app': './src/app/app.component.ts'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },

  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'source-map-loader',
    //     exclude: [
    //       // these packages have problems with their sourcemaps
    //       // helpers.root('node_modules/rxjs'),
    //       // helpers.root('node_modules/@angular'),
    //       // helpers.root('node_modules/@ngrx'),
    //       // helpers.root('node_modules/@angular2-material'),
    //     ]
    //   }
    // ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: [ /node_modules/, /releases/ ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(css|html)$/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=10000'
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ names: ['@angular', 'common'], minChunks: Infinity })
  ],
  target:'electron-renderer'
};
