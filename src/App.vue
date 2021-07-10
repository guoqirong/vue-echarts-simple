<template>
  <div id="app">
    <effect-scatter-map
      :scatterData="scatterData"
      :effectScatterData="effectScatterData"
    ></effect-scatter-map>
  </div>
</template>

<script>
import charlist from './index'
export default {
  name: 'App',
  components: {
    EffectScatterMap: charlist.EffectScatterMap
  },
  data() {
    return {
      scatterData: [
        {
          "name": "海门",
          "value": [
            121.15,
            31.89,
            100
          ]
        }
      ],
      effectScatterData: [
        {
          "name": "大庆",
          "value": [
            125.03,
            46.58,
            279
          ]
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.scatterData.push({
        "name": "合肥",
        "value": [
          117.27,
          31.86,
          190
        ]
      });
      this.effectScatterData[0].value[2] = this.effectScatterData[0].value[2] * 2;
    }, 5000)
  }
}
</script>

<style>
html,body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
