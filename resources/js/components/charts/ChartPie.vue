<template>
  <div ref="chart" class="pie-chart" id="pieChart"></div>
</template>

<script>

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default {
  name: "ChartPie",
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      series: null,
    }
  },
  methods: {
    init() {
      this.chart = am4core.create(this.$refs.chart, am4charts.PieChart3D);
      this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      this.chart.legend = new am4charts.Legend();
      this.chart.padding(0, 0, 0, 64);
      this.chart.fontSize = 12;
      this.chart.legend.position = "right";
      this.chart.legend.maxWidth = 180
      this.chart.data = this.chartData;
      this.series = this.chart.series.push(new am4charts.PieSeries3D());
      this.series.dataFields.value = 'value';
      this.series.dataFields.category = "title";

      this.series.labelText = `{title}: [bold {value}] тыс. т[/]`;

      this.chart.legend.itemContainers.template.events.on("hit", ev =>
        this.$emit('filter', ev.target.dataItem.dataContext.dataContext.title));

      let chartWrapper = document.getElementById('pieChart');
      chartWrapper.querySelector('[aria-labelledby]').style.display = 'none';
    }
  },
  computed: {
    chartData() {
      return this.data.map(el => {
        return {
          title: el.title,
          value: el[this.type]
        }
      })
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    type() {
      this.chart.data = this.chartData;
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
}
</script>

<style lang="scss" scoped>
.pie-chart {
  width: 100%;
  height: 31rem;
}
</style>