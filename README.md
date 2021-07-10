# vue-echarts-simple\

```
一个基于vue2.x和echarts封装简单的图表组件，使其更简单、实用。
目前只完成带闪点的中国地图、世界地图
```

## 使用实例
```
安装
npm install vue-echarts-simple

全局引入
import simpleEcharts from 'vue-echarts-simple'
Vue.use(simpleEcharts);

局部引入
import simpleEcharts from 'vue-echarts-simple'
components: {
  EffectScatterMap: simpleEcharts.EffectScatterMap
},

使用
html：
<effect-scatter-map
  :scatterData="scatterData"
  :effectScatterData="effectScatterData"
  :geoConfig="{
    map: 'china',
  }"
></effect-scatter-map>
```

### 配置项列表(对象及数组参照echarts配置文档)
[echarts配置项文档](https://echarts.apache.org/zh/option.html#title).
#### EffectScatterMap
| 参数                     |  说明                    |  类型     |  默认值  |  对应echarts配置项          |
|:-------------------------|:-------------------------|:---------|:---------|:---------------------------|
| width                    | 宽度                     | String   |  100%    | 无                          |
| height                   | 高度                     | String   |  100%    | 无                          |
| titleConfig              | 标题配置                 | Object   |  {}      | title                       |
| tooltipConfig            | 地图鼠标悬浮提示配置信息  | Object   |  {}      | tooltip                     |
| legendConfig             | 地图图例配置信息          | Object   |  {}      | legend                      |
| backgroundColor          | 背景色配置               | Object   |  {}      | backgroundColor             |
| geoConfig                | 地图配置                 | Object   |  {}      | geo                         |
| seriesScatterConfig      | 普通点配置               | Object   |  {}      | series-scatter              |
| seriesEffectScatterConfig| 闪点配置                 | Object   |  {}      | series-effectScatter        |
| scatterData              | 普通数据                 | Array    |  []      | series-scatter.data         |
| effectScatterData        | 闪点数据                 | Array    |  []      | series-effectScatter.data   |

## 本项目安装运行

### 安装支持包
```
npm install
```

### 开发运行项目
```
npm run serve
```

### 打包项目
```
npm run build
```

### 校验文件
```
npm run lint
```

### 打npm包
```
npm run lib
```

## 本项目目录结构

```
├── lib   npm包打包文件存放目录
├── packages  组件源文件
│   └─── EffectScatterMap  带闪点的地图文件夹
│        ├── index.js  组件引入方法设置
│        └── EffectScatterMap.vue  组件实现文件
├── public  vue项目公用无需打包的静态文件
├── .gitignore  git提交忽略文件
├── .npmignore  npm包发布忽略文件
├── package.json  项目包管理文件
└ src  vue项目主目录
    ├── assets  组件静态资源
    │   └─── featureCollection  // 区域特征集合
    │         ├─── china.json 中国经纬度
    │         └─── world.json 世界经纬度
    ├── App.vue  vue项目入口文件
    ├── index.js npm包安装引入配置文件
    └── main.js  vue项目主配置文件
```

### github仓库地址
[github仓库地址](https://github.com/guoqirong/vue-echarts-simple).
