// 导入组件
import EffectScatterMap from '../packages/EffectScatterMap/index';
//存在所有组件
const components = [EffectScatterMap];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return;
  
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component); //此处的使用的组件vue文件中的name属性
  })
	
  // 设置元素属性
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

	// 判断是否是直接引入文件
  if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue);
  }
}

export default {
  version: '0.1.5',
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
	// 以下是具体的组件列表
  EffectScatterMap
};