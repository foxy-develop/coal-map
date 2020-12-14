<template>
  <div ref="chart" class="chart" id="donutChart"></div>
</template>

<script>

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default {
  name: "ChartDonut",
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    }
  },
  data() {
    return {
      chart: null,
      series: null,
      chartData: null
    }
  },
  methods: {
    init() {
      this.chart = am4core.create(this.$refs.chart, am4charts.PieChart3D);
      this.chart.hiddenState.properties.opacity = 0;
      this.chart.innerRadius = am4core.percent(40);
      this.chart.depth = 100;
      this.chart.padding(32, 32, 32, 32);
      this.chart.fontSize = 10;
      this.chart.data = this.data;
      this.series = this.chart.series.push(new am4charts.PieSeries3D());
      this.series.dataFields.value = "rate";
      this.series.dataFields.depthValue = "rate";
      this.series.dataFields.category = "name";
      this.series.slices.template.cornerRadius = 5;
      this.series.colors.step = 3;

      let chartWrapper = document.getElementById('donutChart');

      chartWrapper.querySelector('[aria-labelledby]').style.display = 'none';
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
}
</script>

<style lang="scss" scoped>
  .chart {
    margin-top: -3rem;
    margin-bottom: -2rem;
    width: 100%;
    height: 28rem;
  }
</style>