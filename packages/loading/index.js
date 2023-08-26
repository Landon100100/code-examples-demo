/* eslint-disable no-unused-vars */
import Loading from './src/main.vue'

// 插件应该暴露一个install方法
// 第一个参数时 Vue 构造器，第二个参数时一个可选的选项对象
Loading.install = function (Vue, options) {
  Vue.component(Loading.name, Loading) // 使用component注册组件
}

// 默认导出组件
export default Loading
