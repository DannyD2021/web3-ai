const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/gw/',
    createProxyMiddleware({
      target: 'https://test-ai.3analytics.io/',
      changeOrigin: true,
    //   pathRewrite: {
    //     '^/app/': '/',
    //   },
    }),
  )
}