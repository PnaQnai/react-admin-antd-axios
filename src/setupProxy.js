const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/v1', { target: 'https://www.baidu.com' })); //接口地址
};