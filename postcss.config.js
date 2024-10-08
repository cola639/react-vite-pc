module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
    },
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 1920,  // 设计稿宽度
      unitPrecision: 4,    // 转换后的精度
      propList: ['*'],     // 需要转换的属性列表
      viewportUnit: 'vw',  // 需要转换的属性单位
      fontViewportUnit: 'vw', 
      selectorBlackList: [],  // 不转换的类名 
      minPixelValue: 1,       // 小于或等于该值的px不转换
      mediaQuery: true,       
      replace: true,
      landscape: false,
      exclude: [/node_modules/, /src\/components\/button/] // 使用正则表达式排除 node_modules 文件夹
    }
  }
};
