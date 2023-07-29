// vue项目的配置文件。这里的配置会覆盖初始的配置。

const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   transpileDependencies: true
// })

// module.exports = {
//   lintOnSave: false, // 暂时关闭代码格式检测
//   // configureWebpack
//   // 配置反向代理
//   devServer: {
//     proxy: {
//       // '/ajax': {
//       //   target: 'https://i.maoyan.com',
//       //   changeOrigin: true
//       // }
//       '/grace': {
//         target: 'https://www.eventcinemas.com.au',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/grace': ''
//         }
//       }
//     }
//   }
// }

module.exports = defineConfig({
  chainWebpack: config => {
    // 添加处理 CSS 文件的 Loader 规则
    config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()

    // 添加处理其他文件资源的 Loader 规则
    config.module
      .rule('file')
      .test(/\.(png|jpe?g|gif|svg)$/i)
      .use('file-loader')
      .loader('file-loader')
      .end()
  },
  lintOnSave: false, // 暂时关闭代码格式检测
  transpileDependencies: true,
  // 配置反向代理
  devServer: {
    proxy: {
      // '/ajax': {
      //   target: 'https://i.maoyan.com',
      //   changeOrigin: true
      // }
      '/Movies': {
        target: 'https://www.eventcinemas.com.au',
        changeOrigin: true,
        pathRewrite: {
          '^/grace': ''
        }
      }
    }
  }
})
