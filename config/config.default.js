'use strict';



exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

module.exports = appInfo => {
  const config = exports;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520437384385_8056';

  // add your config here
  config.middleware = [];

  return config;
};
