module.exports = {

  webpack: config => {
    config.output.libraryTarget = 'amd';
    config.output.filename = 'static/js/bundle.js';

    config.optimization.splitChunks = undefined;
    config.optimization.runtimeChunk = false;

    return config;
  },

  devServer: config => {

    config.headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }

    return config;
  }

};