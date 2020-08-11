const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "dist"),

  devServer: {
    disableHostCheck: true
  },

  publicPath: '/projects/toming/',

  transpileDependencies: ["vuetify"]
};
