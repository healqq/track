const webpackConfig = require('./config/webpack.config.dev');
const eslintConfig = require('@shyftplan/js-config/eslint/.eslintrc.js');
module.exports = Object.assign({}, 
  eslintConfig, { 
    "settings": {
    "import/resolver": {
      "webpack": {
        "config": webpackConfig,
      }
    },
  }
});
