// module.exports = {
//   configureWebpack : {
//     resolve : {
//       alias : {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'views': '@/views',
//       }
//     }
//   }
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
