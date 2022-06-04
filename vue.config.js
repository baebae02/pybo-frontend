module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8000,
    public: '0.0.0.0:8080',
    proxy: {
      '^/api': {
        target: 'https://baebae02.kr',
        ws: true,
        changeOrigin: true,
      },
    },
  },

  publicPath: "/",

  transpileDependencies: [
    'vuetify'
  ]
}
