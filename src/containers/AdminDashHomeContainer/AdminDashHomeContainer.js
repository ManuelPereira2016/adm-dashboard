import React, {Component} from "react";
import DashboardHome from "../../views/Pages/DashboardHome";
import {getDashboard} from "../../api/user";
import {getStyle, hexToRgba} from "@coreui/coreui/dist/js/coreui-utilities";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const indexMonth = index => {
  switch (index) {
    case 0:
      return "ENERO";
    case 1:
      return "FEBRERO";
    case 2:
      return "MARZO";
    case 3:
      return "ABRIL";
    case 4:
      return "MAYO";
    case 5:
      return "JUNIO";
    case 6:
      return "JULIO";
    case 7:
      return "AGOSTO";
    case 8:
      return "SEPTIEMBRE";
    case 9:
      return "OCTUBRE";
    case 10:
      return "NOVIEMBRE";
    case 11:
      return "DICIEMBRE";
    default:
      return "MONTHS";
  }
};

const mainChartOpts = yMax => ({
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          stepSize: Math.ceil(yMax / 3),
          max: yMax
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
});

const barOpts = () => ({
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
});

class AdminDashHomeContainer extends Component {
  state = {
    total: 0,
    aprobado: 0,
    desaprobado: 0,
    costo: 0,
    YMaxDailyChart: 10,
    YMaxMonthlyChart: 10,
    ultimos: [],
    dailyChart: {},
    monthlyChart: {}
  };

  async componentDidMount() {
    const data = await getDashboard();

    const daysLabels = data.dia.map(dia => `${dia.dia}`);
    const daysAprobado = data.dia.map(dia => dia.aprobado);
    const daysDesaprobado = data.dia.map(dia => dia.desaprobado);
    const YMaxDailyChart = data.dia
      .map(day => day.total)
      .reduce((a, b) => (a > b ? a : b));

    const dailyChart = {
      labels: daysLabels,
      datasets: [
        {
          label: "Aprobados",
          backgroundColor: "transparent",
          borderColor: "#20a8d8",
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: daysAprobado
        },
        {
          label: "Desaprobados",
          backgroundColor: "transparent",
          borderColor: "#f86c6b",
          pointHoverBackgroundColor: "#fff",
          borderWidth: 2,
          data: daysDesaprobado
        }
      ]
    };

    // Monthly
    const monthsLabels = data.mes.map(mes => indexMonth(mes.mes));
    const monthAprobado = data.mes.map(mes => mes.aprobado);
    const monthDesaprobado = data.mes.map(mes => mes.desaprobado);
    const YMaxMonthlyChart = data.mes
      .map(mes => mes.total)
      .reduce((a, b) => (a > b ? a : b));

    const monthlyChart = {
      labels: monthsLabels,
      datasets: [
        {
          label: "Aprobados",
          backgroundColor: "#37bae8",
          borderColor: "#37bae8",
          borderWidth: 1,
          hoverBackgroundColor: "#20a8d8",
          hoverBorderColor: "#20a8d8",
          data: monthAprobado
        },
        {
          label: "Desaprobados",
          backgroundColor: "#ee8c8b",
          borderColor: "#ee8c8b",
          borderWidth: 1,
          hoverBackgroundColor: "#f86c6b",
          hoverBorderColor: "#f86c6b",
          data: monthDesaprobado
        }
      ]
    };

    this.setState({
      ...data,
      dailyChart,
      monthlyChart,
      YMaxDailyChart,
      YMaxMonthlyChart
    });
  }

  render() {
    return (
      <DashboardHome
        total={this.state.total}
        aprobado={this.state.aprobado}
        dailyChart={this.state.dailyChart}
        bar={this.state.monthlyChart}
        ultimos={this.state.ultimos}
        costo={this.state.costo}
        mainChartOpts={mainChartOpts(this.state.YMaxDailyChart)}
        barOpts={barOpts(this.state.YMaxMonthlyChart)}
        desaprobado={this.state.desaprobado}
      />
    );
  }
}

export default AdminDashHomeContainer;
