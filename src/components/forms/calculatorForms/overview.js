import { Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import CarbonTotal from "../../sharedComponents/carbonTotal"
import ReactApexCharts from 'react-apexcharts'
import countryFootprintData from "../../data/countryFootprintData"
import regionFootprintData from "../../data/regionFootprintData"

import SearchDrop from '../../sharedComponents/formComponents/searchDrop';
import GreenRadio from '../../sharedComponents/formComponents/greenRadio'

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const Overview= props =>{
  const [compareType, setCompareType] =useState('country')

  const [countrySearchValue, setCountrySearchValue] =useState('')
  const [countryError]=useState(false);
  const [countryOptions, setCountryOptions] = useState(countryFootprintData);
  const [selectedCountry, setSelectedCountry] =useState({})

  const [regionSearchValue, setRegionSearchValue] =useState('')
  const [regionError]=useState(false);
  const [regionOptions, setRegionOptions] = useState(regionFootprintData);
  const [selectedRegion, setSelectedRegion] =useState({})

  const [itemType, setItemType]=useState('flight')



  function updateCompareType(e){
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
    if (e.target.value ==='') {
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
    setSelectedCountry(country)
  }

  function updateRegionSearchValue(value){
    setRegionSearchValue(value);
    if (value==='') {
      setSelectedRegion({})
    }
  }
  function updateCompareToRegion(e){
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
                                         type: 'bar'
                                         },
                                fill: {
                                        colors:['#91A98F']
                                      },
                                 plotOptions: {bar: {borderRadius: 10,
                                                     dataLabels: {position: 'bottom'},
                                                     }
                                              },
                                 dataLabels: {enabled: false,
                                              formatter: function (val) {return val + " Kg"},
                                              offsetY: -30,
                                              style: {fontSize: '12px',
                                                      colors: ["#91A98F"]
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
          <FormControlLabel value="country"
                            control={<GreenRadio/>}
                            label="Country" />
          <FormControlLabel value="region" control={<GreenRadio />} label="Region" />
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
                <p className='centered-text roaming-text medium-link-text'>Select a country to compare your trip to.</p>
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
                        invalidInput={regionError}
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

          {selectedRegion.Entity ===undefined?
            <Row>
              <p className='centered-text roaming-text medium-link-text'>Select a region to compare your trip to.</p>
            </Row>
          :
            <Row>
              <CarbonTotal footprint={selectedRegion.Footprint*1000}
                           label={'The annual average of '+ selectedRegion.Entity+ ' (KG/Person)'} />
            </Row>}
          </Col>
        </Row>


      </>}








    </Container>


    <Container className ='white round-borders raised-borders' style ={{width:'90vw',marginTop:'5vh',paddingTop:'0.7rem'}}>
    <Row>
      <Col onClick={()=>setItemType('flight')}>
        <Row className ='centered-children'>
          <img src ='/plane.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(itemType==='flight'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Flights</p>
        </Row>
      </Col>
      <Col onClick={()=>setItemType('transport')}>
        <Row className ='centered-children'>
          <img src ='/train.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(itemType==='transport'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Transport</p>
        </Row>
      </Col>
      <Col onClick={()=>setItemType('food')}>
        <Row className ='centered-children'>
          <img src ='/avacado.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(itemType==='food'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Food</p>
        </Row>
      </Col>
      <Col onClick={()=>setItemType('accomodation')}>
        <Row className ='centered-children'>
          <img src ='/tent.png'
               alt ='food'
               size ={'2em'}
               className ={'mobile-calculator-icon '}/>
        </Row>
        <Row className ='centered-children'>
        <p className = {'centered-text '
                       +(itemType==='accomodation'? 'balloon-text small-link-text':'balloon-text roaming-yellow-text small-link-text ')}>
                       Accomodation</p>
        </Row>
      </Col>
    </Row>

    {itemType==='flight'?
    <>
      <Row className='small-bottom-border vertical-margin-sm '>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>From</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>To</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>Distance (KM)</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>Footprint (KG)</p>
        </Col>
      </Row>
      {props.flightList.map((flight, i)=>{
                    return <FlightList flight ={flight}
                                        isMobile={props.isMobile}
                                        key={i}/>})}

      <Row>
        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
          &nbsp;
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
          <p className='roaming-text-sm '>
          {'Total: '+(props.totalFlightCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
          </p>
        </Col>
      </Row>
      </>:null}


    {itemType==='transport'?
  <>
  <Row>
    <p className='roaming-text-md '>Car</p>
  </Row>
  <Row className='small-bottom-border vertical-margin-sm '>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Car Type</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Driving Type</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Distance (KM)</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Footprint (KG)</p>
    </Col>
  </Row>
  {props.carList.map((transport, i)=>{
                return <CarList transport ={transport}
                                    isMobile={props.isMobile}
                                    key={i}/>})}

  <Row>
    <Col xs={9} sm={9} md={9} lg={9} xl={9}>
      &nbsp;
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
      <p className='roaming-text-sm '>
      {'Total: '+(props.totalCarCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
      </p>
    </Col>
  </Row>

  <Row>
    <p className='roaming-text-md '>Bus</p>
  </Row>
  <Row className='small-bottom-border vertical-margin-sm '>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Bus Fullness</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Driving Type</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Distance (KM)</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Footprint (KG)</p>
    </Col>
  </Row>
  {props.busList.map((transport, i)=>{
                return <BusList transport ={transport}
                                    isMobile={props.isMobile}
                                    key={i}/>})}


  <Row>
    <Col xs={9} sm={9} md={9} lg={9} xl={9}>
      &nbsp;
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
      <p className='roaming-text-sm '>
      {'Total: '+(props.totalBusCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
      </p>
    </Col>
  </Row>
  <Row>
    <p className='roaming-text-md '>Train</p>
  </Row>
  <Row className='small-bottom-border vertical-margin-sm '>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Country</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Engine Type</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Distance (KM)</p>
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
      <p className='roaming-text-sm '>Footprint (KG)</p>
    </Col>
  </Row>
  {props.trainList.map((transport, i)=>{
                return <TrainList transport ={transport}
                                    isMobile={props.isMobile}
                                    key={i}/>})}
  <Row>
    <Col xs={9} sm={9} md={9} lg={9} xl={9}>
      &nbsp;
    </Col>
    <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
      <p className='roaming-text-sm '>
      {'Total: '+(props.totalTrainCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
      </p>
    </Col>
  </Row>
  </>:null}
  {itemType==='food'?
<>
  <Row>
    <p className='roaming-text-md '>Diet</p>
  </Row>
  <Row className='small-bottom-border vertical-margin-sm '>

  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
    <p className='roaming-text-sm '>Diet Type</p>
  </Col>
  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
    <p className='roaming-text-sm '>Days</p>
  </Col>
  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
    <p className='roaming-text-sm '>Footprint (KG)</p>
  </Col>
</Row>
{props.dietList.map((diet, i)=>{
              return <DietList diet ={diet}
                                  isMobile={props.isMobile}
                                  key={i}/>})}
<Row>
  <Col xs={9} sm={9} md={9} lg={9} xl={9}>
    &nbsp;
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
    <p className='roaming-text-sm '>
    {'Total: '+(props.totalDietCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
    </p>
  </Col>
</Row>

<Row>
  <p className='roaming-text-md  '>Food</p>
</Row>
<Row className='small-bottom-border vertical-margin-sm '>

<Col xs={4} sm={4} md={4} lg={4} xl={4}>
  <p className='roaming-text-sm '>Food</p>
</Col>
<Col xs={4} sm={4} md={4} lg={4} xl={4}>
  <p className='roaming-text-sm '>Number of Servings</p>
</Col>
<Col xs={4} sm={4} md={4} lg={4} xl={4}>
  <p className='roaming-text-sm '>Footprint (KG)</p>
</Col>
</Row>
{props.foodList.map((food, i)=>{
            return <FoodList food ={food}
                                isMobile={props.isMobile}
                                key={i}/>})}
<Row>
  <Col xs={9} sm={9} md={9} lg={9} xl={9}>
    &nbsp;
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
    <p className='roaming-text-sm '>
    {'Total: '+(props.totalFoodCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
    </p>
  </Col>
</Row>

</>:null}
{itemType==='accomodation'?
<>

  <Row className='small-bottom-border vertical-margin-sm '>
  <Col xs={3} sm={3} md={3} lg={3} xl={3}>
    <p className='roaming-text-sm '>Name</p>
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3}>
    <p className='roaming-text-sm '>Number of Nights</p>
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3}>
    <p className='roaming-text-sm '>Number of Guests</p>
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3}>
    <p className='roaming-text-sm '>Footprint (KG)</p>
  </Col>
</Row>
{props.hotelList.map((hotel, i)=>{
              return <HotelList hotel ={hotel}
                                  isMobile={props.isMobile}
                                  key={i}/>})}
<Row>
  <Col xs={9} sm={9} md={9} lg={9} xl={9}>
    &nbsp;
  </Col>
  <Col xs={3} sm={3} md={3} lg={3} xl={3} className='small-top-border'>
    <p className='roaming-text-sm '>
    {'Total: '+(props.totalAccomodationCost).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (KG)'}
    </p>
  </Col>
</Row>

</>:null}

    </Container>



    </>
  )
}

const FlightList = props=>{


  return(
    <>
      <Row className =' '>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.flight.fromAirport.City}</p>

        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.flight.toAirport.City}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>

          {props.flight.flightType==='Round Trip'?
          <p className='roaming-text-sm '>{(props.flight.distance).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (RT)'}
          </p>
          :
          <p className='roaming-text-sm '>{(props.flight.distance).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })+' (OW)'}
          </p>
          }

        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>


        <p className='roaming-text-sm '>{(props.flight.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>


        </Col>
      </Row>
    </>
  )
}

const TrainList =props=>{

  return(
    <>

      <Row className =''>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>  {props.transport.country}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>  {props.transport.engineType}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>          {(props.transport.distance).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>

        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>          {(props.transport.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
        </Col>
      </Row>
    </>
  )
}
const CarList =props=>{

  return(
    <>

      <Row className =''>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.transport.vehicle}</p> 
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.transport.drivingType}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{(props.transport.distance).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{(props.transport.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
        </Col>
      </Row>
    </>
  )
}
const BusList =props=>{

  return(
    <>

      <Row className =''>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.transport.fullness}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{props.transport.drivingType}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{(props.transport.distance).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
          <p className='roaming-text-sm '>{(props.transport.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}</p>
        </Col>
      </Row>
    </>
  )
}

const FoodList =props=>{

  return(
    <>
      <Row className =''>

        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>{props.food.food.food}</p>

        </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>  {props.food.quantity +' x ('+props.food.food.servingDescr+')'}</p>

        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>          {(props.food.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}
</p>
        </Col>
      </Row>
    </>
  )
}

const DietList =props=>{

  return(
    <>
      <Row className =''>

        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>{props.diet.dietType.food}</p>

        </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>  {props.diet.quantity}</p>

        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <p className='roaming-text-sm '>          {(props.diet.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}
</p>
        </Col>
      </Row>
    </>
  )
}

const HotelList =props=>{

  return(
    <>
      <Row className =''>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        <p className='roaming-text-sm '>{props.hotel.hotelName}</p>

        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        <p className='roaming-text-sm '>  {props.hotel.numberOfNights}</p>

        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        <p className='roaming-text-sm '>          {props.hotel.numberOfGuests}</p>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
        <p className='roaming-text-sm '>          {(props.hotel.carbonFootprint).toLocaleString(undefined, { maximumFractionDigits: 1,minimumFractionDigits:1 })}
</p>
        </Col>
      </Row>
    </>
  )
}
export default Overview;
