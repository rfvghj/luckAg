const path = require('path')
module.exports = {
  lintOnSave: false,
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/theme.less')
      ]
    }
  },
  productionSourceMap: false, // 生产环境是否生成 SourceMap
}