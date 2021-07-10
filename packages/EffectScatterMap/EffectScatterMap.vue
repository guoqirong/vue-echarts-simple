<template>
  <div ref="effectScatterMap" :style="{height: height, width: width}"></div>
</template>

<script>
import * as echarts from 'echarts';
import china from '../../src/assets/featureCollection/china.json'
import world from '../../src/assets/featureCollection/world.json'
export default {
  name: "EffectScatterMap",
  props: {
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 高度
    height: {
      type: String,
      default: '100%'
    },
    // 标题配置
    titleConfig: {
      type: Object,
      default: () => {}
    },
    // 地图鼠标悬浮提示配置信息
    tooltipConfig: {
      type: Object,
      default: () => {}
    },
    // 地图图例配置信息
    legendConfig: {
      type: Object,
      default: () => {}
    },
    // 背景色配置
    backgroundColor: {
      type: Object,
      default: () => {}
    },
    // 地图配置
    geoConfig: {
      type: Object,
      default: () => {}
    },
    // 普通点配置
    seriesScatterConfig: {
      type: Object,
      default: () => {}
    },
    // 闪点配置
    seriesEffectScatterConfig: {
      type: Object,
      default: () => {}
    },
    // 普通数据
    scatterData: {
      type: Array,
      default: () => [],
    },
    // 闪点数据
    effectScatterData: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      // echuarts配置实例
      echart: null,
      // echuarts配置项
      options: null,
    };
  },
  watch: {
    // 普通数据变化监听
    scatterData: {
      handler(val) {
        this.options.series[0].data = val;
        this.echart.setOption(this.options);
      }
    },
    // 闪点数据变化监听
    effectScatterData: {
      handler(val) {
        this.options.series[1].data = val;
        this.echart.setOption(this.options);
      }
    }
  },
  computed: {
    // 获取区域经纬度
    mapRegister() {
      if (this.geoConfig?.map.includes('china')) {
        return china;
      } else if (this.geoConfig?.map.includes('world')) {
        return world;
      }
      return china;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      echarts.registerMap(this.geoConfig?.map ?? 'china', this.mapRegister);
      this.echart = echarts.init(this.$refs.effectScatterMap);
      this.options = {
        title: {
          text: '',
          subtext: '',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          },
          ...this.titleConfig
        },
        tooltip: {
          show: false,
          ...this.tooltipConfig
        },
        legend: {
          left: 'left',
          data: [],
          textStyle: {
            color: '#ccc'
          },
          ...this.legendConfig
        },
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            // 0% 处的颜色
            offset: 0, color: '#7f2c70'
          }, {
            // 100% 处的颜色
            offset: 1, color: '#091732'
          }],
          // 缺省为 false
          globalCoord: false,
          ...this.backgroundColor
        },
        geo: {
          map: 'china',
          show: true,
          roam: true,
          itemStyle: {
            areaColor: '#091632',
            borderColor: '#1773c3',
            shadowColor: '#1773c3',
            shadowBlur: 20
          },
          emphasis: {
            focus : 'none',
            label: {
              show: false
            },
            itemStyle: {
              areaColor: '#091632',
              borderColor: '#1773c3',
              shadowColor: '#1773c3',
              shadowBlur: 20
            }
          },
          ...this.geoConfig
        },
        series: [
          {
            // 普通点配置
            name: '',
            type: 'scatter',
            // 使用的坐标系
            coordinateSystem: 'geo',
            // 点大小设置
            symbolSize: function (val) {
              return val[2] / 20;
            },
            // 高亮配置
            emphasis: {
              label: {
                show: true
              }
            },
            // 提示文字配置
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            // 点样式配置
            itemStyle: {
              color: '#ddb926'
            },
            ...this.seriesScatterConfig,
            data: this.scatterData
          },
          {
            // 闪点配置
            name: '',
            type: 'effectScatter',
            // 使用的坐标系
            coordinateSystem: 'geo',
            // 点大小设置
            symbolSize: function (val) {
              return val[2] / 20;
            },
            // 闪点显示特效
            showEffectOn: 'render',
            // 闪点涟漪特效
            rippleEffect: {
              brushType: 'stroke'
            },
            // 是否开启动效
            animation: true,
            // 提示文字配置
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            // 点样式配置
            itemStyle: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            zlevel: 1,
            ...this.seriesEffectScatterConfig,
            data: this.effectScatterData
          }
        ]
      };
      this.echart.setOption(this.options);
      window.onresize = () => {
        this.echart.resize();
      }
    }
  }
}
</script>