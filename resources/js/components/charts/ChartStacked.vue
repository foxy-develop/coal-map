<template>
  <div class="stacked-chart" ref="chart" id="stackedChart"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


export default {
  name: "ChartStacked",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      categoryAxis: null,
      valueAxis: null
    }
  },
  methods: {
    createSeries( type ) {
      let series = this.chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = type.type;
      series.dataFields.categoryX = "title";
      series.name = type.name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY} тыс. т[/]";
      series.stacked = type.stacked;
      series.columns.template.width = am4core.percent(95);
    },

    init() {
      // Create chart instance
      this.chart = am4core.create(this.$refs.chart, am4charts.XYChart);

      // Add data
      this.chart.data = this.data.data;

      // Create axes
      this.categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
      this.categoryAxis.dataFields.category = "title";
      this.chart.fontSize = 12;
      // this.categoryAxis.title.text = "Добыча и потребление угля";
      this.categoryAxis.renderer.grid.template.location = 0;
      this.categoryAxis.renderer.minGridDistance = 20;
      this.categoryAxis.renderer.cellStartLocation = 0.1;
      this.categoryAxis.renderer.cellEndLocation = 0.9;

      this.valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
      this.valueAxis.min = 0;
      this.valueAxis.max = 50000;
      this.valueAxis.title.text =  "Тысяч тонн в год (тыс. т)";

      this.data.types.forEach(type => this.createSeries(type));

      // Add legend
      this.chart.legend = new am4charts.Legend();

      let chartWrapper = document.getElementById('stackedChart');

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

<style lang="scss">
.stacked-chart {
  width: 100%;
  height: 31rem;
}
</style>