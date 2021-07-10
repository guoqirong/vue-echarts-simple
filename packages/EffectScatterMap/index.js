// 为组件提供 install 安装方法，供按需引入
import EffectScatterMap from './EffectScatterMap.vue';
EffectScatterMap.install  = (Vue) => {
  Vue.component(EffectScatterMap.name,EffectScatterMap);
}
export default EffectScatterMap;