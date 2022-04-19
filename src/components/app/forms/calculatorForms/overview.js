import { Container, Row, Col, Button} from 'react-bootstrap';
import {useState} from "react";
import CarbonTotal from "../../elements/carbonTotal"
import ReactApexCharts from 'react-apexcharts'
import countryFootprintData from "../../data/countryFootprintData"
import regionFootprintData from "../../data/regionFootprintData"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SearchDrop from '../../../standardComponents/searchDrop';

const Overview= props =>{
  const [compareType, setCompareType] =useState('country')

  const [countrySearchValue, setCountrySearchValue] =useState('')
  const [countryError, setCountryError]=useState(false);
  const [countryOptions, setCountryOptions] = useState(countryFootprintData);
  const [selectedCountry, setSelectedCountry] =useState({})

  const [regionSearchValue, setRegionSearchValue] =useState('')
  const [regionError, setRegionError]=useState(false);
  const [regionOptions, setRegionOptions] = useState(countryFootprintData);
  const [selectedRegion, setSelectedRegion] =useState({})


  function updateCompareType(e){
    console.log(e.target.value)
    if (e.target.value!==compareType) {
      setSelectedRegion({})
      setSelectedCountry({})
      setCountrySearchValue('')
      setRegionSearchValue('')
    }
    setCompareType(e.target.value)
  }
  function updateCountrySearchValue(value){
    setCountrySearchValue(value)
    if (value==='') {
      setSelectedCountry({})
    }
  }
  function updateCompareToCountry(e){
    console.log('updating the compare to country')
    console.log(e.target.value)

    if (e.target.value ==='') {
      console.log('search value is empty')
      let options = countryFootprintData;
      setCountryOptions(options);
    }
    else {
      console.log('search value is not empty')
      let options = countryFootprintData.filter(function (el)
      {
        return el.Country.toUpperCase().includes(e.target.value.toUpperCase())
      })
      setCountryOptions(options);
    }


  }
  function selectCompareToCountry(country){
    console.log('selectingcompare to country')
    console.log(country)
    setSelectedCountry(country)
  }

  function updateRegionSearchValue(value){
    setRegionSearchValue(value);
    if (value==='') {
      setSelectedRegion({})
    }
  }
  function updateCompareToRegion(e){
    console.log(e.target.value)
    var options = regionFootprintData.filter(function (el)
    {
      return el.Entity.toUpperCase().includes(e.target.value.toUpperCase())
    })
    setRegionOptions(options);
  }
  function selectCompareToRegion(region) {

    setSelectedRegion(region)
  }

  return(
    <>
    <Container className ='white round-borders raised-borders'style ={{width:'90vw'}}>
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

    <Container  className ='white round-borders raised-borders' style ={{width:'90vw',marginTop:'5vh'}}>
    <Row className ='form-line'>
      <FormControl component="fieldset">
        <FormLabel component="legend">Compare To:</FormLabel>
        <RadioGroup row aria-label="compareTo" name="selectedCompareType" value={compareType} onChange={updateCompareType}>
          <FormControlLabel value="country" control={<Radio />} label="Country" />
          <FormControlLabel value="region" control={<Radio />} label="Region" />
        </RadioGroup>
      </FormControl>
    </Row>
    {compareType==='country'?
      <>
        <Row className ='form-line'>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <SearchDrop options={countryOptions}
                        inputId ={'compareToCountry'}
                        inputName={'compareToCountry'}
                        inputLabel={'Select The Country'}
                        searchValue = {countrySearchValue}
                        setSearchValue ={updateCountrySearchValue}
                        updateOptions = {updateCompareToCountry}
                        selectOption = {selectCompareToCountry}
                        displayKeys = {['Country']}
                        valueKey ={'Footprint'}
                        keyFields ={['Country','Footprint']}
                        invalidInput={countryError}
                        key ={'Country Compare Search'}/>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <CarbonTotal footprint={props.totalCarbonCost}
                           label={'Your trips Carbon Footprint (KG)'}/>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            {selectedCountry.Country ===undefined?
              <Row>
                <p>Select a country to compare your trip to.</p>
              </Row>
            :
              <Row>
                <CarbonTotal footprint={selectedCountry.Footprint*1000}
                             label={'The annual average of '+ selectedCountry.Country+ ' (KG/Person)'} />
              </Row>}
          </Col>
        </Row>
      </>
      :
      <>
        <Row className ='form-line'>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <SearchDrop options={regionOptions}
                        inputId ={'compareToRegion'}
                        inputName={'compareToRegion'}
                        inputLabel={'Select The Region'}
                        searchValue = {regionSearchValue}
                        setSearchValue ={updateRegionSearchValue}
                        updateOptions = {updateCompareToRegion}
                        selectOption = {selectCompareToRegion}
                        displayKeys = {['Entity']}
                        valueKey ={'Footprint'}
                        keyFields ={['Entity','Footprint']}
                        invalidInput={countryError}
                        key ={'Region Compare Search'}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <CarbonTotal footprint={props.totalCarbonCost}
                           label={'Your trips Carbon Footprint (KG)'}/>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <CarbonTotal footprint={selectedRegion.Footprint*1000}
                           label={'The annual average of '+ selectedRegion.Entity+ ' (KG/Person)'} />
            </Row>
          </Col>
        </Row>
      </>}








    </Container>
    </>
  )
}

export default Overview;
