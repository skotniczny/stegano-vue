module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stegano-vue/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Stegano Vue'
    }
  }
}
