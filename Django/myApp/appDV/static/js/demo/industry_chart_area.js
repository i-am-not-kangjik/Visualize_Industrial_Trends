const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
var ctx = document.getElementById("industry_chart_area");

const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.red,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.green,
      fill: false
    }
  ]
};