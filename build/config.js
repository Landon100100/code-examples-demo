const path = require('path');

// js忽略路径
exports.jsexclude = /node_modules|utils\/poppor\.js|utils\/date\.js/

// 定义路径别名，可以简化代码中的路径
exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'me-ui': path.resolve(__dirname, '../'),
};