import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
//import sQuote from "components/Typography/Quote.js";
//import Muted from "components/Typography/Muted.js";
//import Primary from "components/Typography/Primary.js";
//import Info from "components/Typography/Info.js";
//import Success from "components/Typography/Success.js";
//import Warning from "components/Typography/Warning.js";
//import Danger from "components/Typography/Danger.js";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import ReactApexCharts from 'react-apexcharts'
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer";

import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom'
// import CardBody from "components/Card/CardBody.js";

const styles = 
{
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

class ApexChart extends React.Component
{
  constructor(props)  
  {
    super(props);

    this.state = 
    {
    
      series: this.props.gata,
      options: {
        chart: {
          type: 'radialBar',
          offsetY: -25,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#ffffff",
              strokeWidth: '97%',
              margin: 15, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 2,
                color: '#705',
                opacity: 0.4,
                blur: 7
              }
            },
            dataLabels: {
              name: {
                show: true
              },
              value: {
                offsetY: -70,
                fontSize: '30px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: this.props.etiqueta,
      }, 
    };
  } 
  render() {
    return (
            
          <div id="chart">
          <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" />
        </div>
        
    );
  } 
}

ApexChart.propTypes = 
{
  gata: PropTypes.array.isRequired,
  etiqueta: PropTypes.array.isRequired
};

ApexChart.defaultProps = {
  gata: [33.5],
  etiqueta: "Nombre por defecto"
};

//var ola = new ApexChart;

export default function TypographyPage() {
  const classes = useStyles();
  return (
  <GridContainer>
    <GridItem xs={15} sm={12} md={4}>  
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Ancho de Banda utilizado</h4>
        </CardHeader>
        <ApexChart series={3} etiqueta = {["Bandwidth in use"]}/> 
        <h3 align = "center">Ping (Ohio): 120ms</h3>
      </Card>
    </GridItem>

    <GridItem xs={10} sm={5} md={2}>  
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Potencia eléctrica en uso: </h4>
        </CardHeader>
          <h3 align = "center">13,300 W</h3>
      </Card>
    </GridItem>

    <GridItem xs={15} sm={12} md={4}>  
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Almacenamiento ocupado: </h4>
        </CardHeader>
        <ApexChart gata={[1.78]} etiqueta = {["HDD/SDD used"]}/> 
        <h3 align = "center">125 {" "}GB de 7 TB</h3>
      </Card>
    </GridItem>
  </GridContainer>
  );
}
