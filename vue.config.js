module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cyc/'
    : '/',
  devServer: {
    disableHostCheck: true
  }
}
