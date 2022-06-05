module.exports = {
  devServer: {
    host: '0.0.0.0',
    https: false,
    disableHostCheck: true,
    port: 8000,
    public: '0.0.0.0:8000',
    proxy: {
      '/question': {
        target: 'http://127.0.0.1:5000'
      },
    },
  },
  publicPath: "/",

  transpileDependencies: [
    'vuetify'
  ]
}
