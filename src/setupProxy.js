const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/gw/',
    createProxyMiddleware({
      target: 'https://chat.test.3analytics.ai',
      changeOrigin: true,
    //   pathRewrite: {
    //     '^/app/': '/',
    //   },
    }),
  )
}