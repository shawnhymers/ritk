import NewFoodForm from './forms/newFoodForm'
import { Container, Row, Col, Button} from 'react-bootstrap';
import {useState} from "react";
import CarbonTotal from "./elements/carbonTotal"
import ReactApexCharts from 'react-apexcharts'

const Overview= props =>{
  return(
    <>
    <Container className ='white round-borders raised-borders'>
      <div id="chart" className ='vertical-padding-sm'>
        <ReactApexCharts  type="bar" height={350}
        series = {[{name: 'Carbon Footprint',
                                 data: [parseFloat(props.totalFlightCost).toFixed(2),
                                        parseFloat(props.totalTransportCost).toFixed(2),
                                        parseFloat(props.totalFoodCost).toFixed(2),
                                        parseFloat(props.totalAccomodationCost).toFixed(2)]}]}
                     options = {{chart: {height: 360,
                                         type: 'bar',
                                         },
                                 plotOptions: {bar: {borderRadius: 10,
                                                     dataLabels: {position: 'bottom'},
                                                     }
                                              },
                                 dataLabels: {enabled: false,
                                              formatter: function (val) {return val + " Kg"},
                                              offsetY: -30,
                                              style: {fontSize: '12px',
                                                      colors: ["#304758"]
                                                     }
                                              },
                                 xaxis: {categories: ['Flights','Transportation','Food','Accomodation'],
                                         position: 'bottom',
                                         axisBorder: {show: false},
                                         axisTicks: {show: false},
                                         crosshairs: {fill: {type: 'gradient',
                                                             gradient: {colorFrom: '#D8E3F0',
                                                                        colorTo: '#BED1E6',
                                                                        stops: [0, 100],
                                                                        opacityFrom: 0.4,
                                                                        opacityTo: 0.5,
                                                                      }
                                                                    }
                                                                  },
                                         tooltip: {enabled: false}
                                        },
                                 yaxis: {axisBorder: {show: false},
                                         axisTicks: {show: true},
                                         labels: {show: true,
                                                  formatter: function (val) {
                                                    return val + " Kg";
                                                    }
                                                  }
                                        },
                                 title: {
                                   text: 'Carbon Footprint (Kg Co2)',
                                   floating: true,
                                   offsetY: 0,
                                   align: 'center',
                                   style: {
                                     color: '#444'
                                   }
                                 }
                               }}/>
      </div>
    </Container>

    </>
  )
}

export default Overview;
