import React, { Component } from "react";
import PropTypes from "prop-types";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table
} from "reactstrap";
import DefaultLayout from "../../../containers/DefaultLayout";
import Widget02 from "../../Widgets/Widget02";
import Widget03 from "../../Widgets/Widget03";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import moment from "moment";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const doughnut = {
  labels: ["Web", "USSD", "IVR"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ]
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: "facebook" },
  { data: [1, 13, 9, 17, 34, 41, 38], label: "twitter" },
  { data: [78, 81, 80, 45, 34, 12, 40], label: "linkedin" },
  { data: [35, 23, 56, 22, 97, 23, 64], label: "google" }
];

const makeSocialBoxData = dataSetNo => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: "rgba(255,255,255,.1)",
        borderColor: "rgba(255,255,255,.55)",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
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
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients"
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic"
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR"
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate"
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

class DashboardHome extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    aprobado: PropTypes.number.isRequired,
    desaprobado: PropTypes.number.isRequired,
    costo: PropTypes.number.isRequired,
    mainChartOpts: PropTypes.object.isRequired,
    barOpts: PropTypes.object.isRequired,
    ultimos: PropTypes.array.isRequired,
    dailyChart: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  renderRows() {
      const validaciones = (validacion, index) => (
          <tr key={`id_${index}`}>
            <td className="text-center">{validacion.dni}</td>
            <td className="text-center">{validacion.sexo}</td>
            <td className="text-center">{moment(validacion.fecha).format("DD-MM-YYYY HH:ss")}</td>
            <td className="text-center">{validacion.porcentaje}</td>
          </tr>
      );

      return this.props.ultimos.map((validacion,index) => validaciones(validacion, index));
  }

  renderTable() {
    return (
      <Card>
        <CardHeader className="text-white bg-primary">
          <CardTitle className="mb-0">Validaciones recientes</CardTitle>
        </CardHeader>
        <CardBody className="text-dark">
          <Table
            hover={true}
            responsive={true}
            className="table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th className="text-center">DNI</th>
                <th className="text-center">Sexo</th>
                <th className="text-center">Fecha</th>
                <th className="text-center">%</th>
              </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
          </Table>
          {!this.props.ultimos.length
              ?
              this.renderNoList()
              :
              null
          }
        </CardBody>
      </Card>
    );
  }

  renderNoList() {
    return <div className='empty-table'>No se encontraron validaciones recientes.</div>;
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  render() {
    const { dailyChart, bar, mainChartOpts, barOpts } = this.props;

    return (
      <DefaultLayout>
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="6" lg="3">
              <Widget02
                header="Cantidad de Request"
                mainText={`${this.props.total}`}
                icon="fa fa-cogs"
                color="primary"
                variant="1"
              />
            </Col>
            <Col xs="12" sm="6" lg="3">
              <Widget02
                header="Aprobados"
                mainText={`${this.props.aprobado}`}
                icon="fa fa-laptop"
                color="info"
                variant="1"
              />
            </Col>
            <Col xs="12" sm="6" lg="3">
              <Widget02
                header="Erroneos"
                mainText={`${this.props.desaprobado}`}
                icon="fa fa-moon-o"
                color="danger"
                variant="1"
              />
            </Col>
            <Col xs="12" sm="6" lg="3">
              <Widget02
                header="Gasto Mensual"
                mainText={`${this.props.costo}`}
                icon="fa fa-bell"
                color="warning"
                variant="1"
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" lg="6">
              <Card className="bg-indigo">
                <CardHeader className="text-white">
                  <CardTitle className="mb-0">Mes Actual</CardTitle>
                </CardHeader>
                <CardBody className="text-dark">
                  <div className="chart-wrapper" style={{ height: 300 + "px" }}>
                    <Line
                      data={dailyChart}
                      options={mainChartOpts}
                      height={300}
                    />
                  </div>
                  <Row className="text-center">
                    <Col sm={12} md className="legend-colors">
                      <div className="legend">
                        <i className="fa fa-square blue" />
                        <strong>ap</strong>
                      </div>
                      <div className="legend">
                        <i className="fa fa-square red" />
                        <strong>err</strong>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="12" lg="6">
              <Card className="bg-orange">
                <CardHeader className="text-white">
                  <CardTitle className="mb-0">
                    Verificaciones mensuales
                  </CardTitle>
                </CardHeader>
                <CardBody className="text-dark">
                  <div className="chart-wrapper" style={{ height: 300 + "px" }}>
                    <Bar data={bar} options={barOpts} />
                  </div>
                  <Row className="text-center">
                    <Col sm={12} md className="dummy-space" />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="main-container">
            <Col xs="12" sm="12" lg="6">
                {this.renderTable()}
            </Col>
            <Col xs="12" sm="12" lg="6">
              <Card className="container-no-overflow">
                <CardTitle className="mt-2 ml-2">Browser Usage</CardTitle>
                <CardBody className="text-dark">
                  <div className="chart-wrapper">
                    <Doughnut data={doughnut} />
                  </div>
                  <Row className="text-center">
                    <Col sm={12} md className="dummy-space" />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultLayout>
    );
  }
}

export default DashboardHome;
