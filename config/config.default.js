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

  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:8080' ]
  };

  config.cors = {
    //允许跨域
    origin: '*',
    //允许使用的方法
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return config;
};
