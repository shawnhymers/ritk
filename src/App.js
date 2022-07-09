import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {  Row, Col, Container} from 'react-bootstrap';

import coupleIcon from "./assets/icons/coupleIcon.png"

import ('./styles/App.css');
import ('./styles/text.css');
import ('./styles/effects.css');
import('./styles/speechBubbles.css')
import ('./styles/borders.css');
import ('./styles/colours.css');
import ('./styles/elements.css');
import ('./styles/errors.css');
import ('./styles/form.css');
import ('./styles/images.css');
import ('./styles/layout.css');


const Main = lazy(() => import('./components/main'));
const CalculatorPage = lazy(() => import('./components/calculator'));
const AboutPage = lazy(() => import("./components/about"));
const BlogPage = lazy(() => import('./components/blogs'));
const GalleryPage = lazy(() => import('./components/galleries'));

const WhistlerFoodGuide = lazy(() => import('./components/blogs/whistlerFoodGuide'));
const WhistlerActivityGuide = lazy(() => import('./components/blogs/whistlerActivityGuide'));
const VancouverFoodGuide = lazy(() => import('./components/blogs/vancouverFoodGuide'));
const VancouverActivityGuide = lazy(() => import('./components/blogs/vancouverActivityGuide'));
const CarbonCostOfLatam = lazy(() => import('./components/blogs/carbonCostOfLatam'));
const CarbonCostOfFlying = lazy(() => import('./components/blogs/carbonCostOfFlying'));
const CarbonCostOfColombia = lazy(() => import('./components/blogs/carbonCostOfColombia'));
const CarbonCostOfEcuador = lazy(() => import('./components/blogs/carbonCostOfEcuador'));
const CarbonCostOfDiet = lazy(() => import('./components/blogs/carbonCostOfDiet'));
const BanosActivityGuide = lazy(() => import('./components/blogs/banosActivityGuide'));
const MedellinFoodGuide = lazy(() => import('./components/blogs/medellinFoodGuide'));

const  InTheKnowQuito = lazy(() => import('./components/blogs/inTheKnowQuito'));
const InTheKnowGuatape = lazy(() => import('./components/blogs/inTheKnowGuatape'));
const InTheKnowMedellin = lazy(() => import('./components/blogs/inTheKnowMedellin'));
const CostaRica = lazy(() => import('./components/galleries/costaRica'));
const Granada = lazy(() => import('./components/galleries/granada'));
const Ometepe = lazy(() => import('./components/galleries/ometepe'));
const Cartagena = lazy(() => import('./components/galleries/cartagena'));
const Guatape = lazy(() => import('./components/galleries/guatape'));
const Quindio = lazy(() => import('./components/galleries/quindio'));
const Medellin = lazy(() => import('./components/galleries/medellin'));
const Quito = lazy(() => import('./components/galleries/quito'));
const Otavalo = lazy(() => import('./components/galleries/otavalo'));
const Arequipa = lazy(() => import('./components/galleries/arequipa'));
const Cusco = lazy(() => import('./components/galleries/cusco'));
const Huacachina = lazy(() => import('./components/galleries/huacachina'));
const SacredValley = lazy(() => import('./components/galleries/sacredValley'));
const PanamaCity = lazy(() => import('./components/galleries/panamaCity'));
const Huaraz = lazy(() => import('./components/galleries/huaraz'));
const ScrollToTop = lazy(() => import('./components/helpers/scrollToTop'));


function App() {

  return (
    <>

        <Router>
          <Suspense fallback={
            <Container className ='roaming-white full-width' style ={{height:'100vh'}}>
              <Row style ={{height:'33vh'}}>
                &nbsp;
              </Row>
              <Row >
                <Col className ='centered-children '>
                  <img style ={{maxWidth:'30vw'}}src ={coupleIcon} alt ='loadingIcon' />
                </Col>
              </Row>
              <Row className ='centered-children'>
                <Col className ='centered-children '>
                  <p className ='roaming-text centered-text'>One moment please...</p>
                </Col>
              </Row>
            </Container>
          }>
            <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/home" component={Main} />

              <Route exact path="/calculator" component={CalculatorPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/blog/:searchTerm" component={BlogPage} />
              <Route exact path="/gallery" component={GalleryPage} />




              <Route exact path="/home/:redirectView" component={Main} />

              <Route exact path="/WhistlerFoodGuide" component={WhistlerFoodGuide} />
              <Route exact path="/VancouverFoodGuide" component={VancouverFoodGuide} />
              <Route exact path="/MedellinFoodGuide" component={MedellinFoodGuide} />

              <Route exact path="/WhistlerActivityGuide" component={WhistlerActivityGuide} />
              <Route exact path="/VancouverActivityGuide" component={VancouverActivityGuide} />
              <Route exact path="/BanosActivityGuide" component={BanosActivityGuide} />

              <Route exact path="/CarbonCostOfLatam" component={CarbonCostOfLatam} />
              <Route exact path="/CarbonCostOfColombia" component={CarbonCostOfColombia} />
              <Route exact path="/CarbonCostOfDiet" component={CarbonCostOfDiet} />
              <Route exact path="/CarbonCostOfFlying" component={CarbonCostOfFlying} />
              <Route exact path="/CarbonCostOfEcuador" component={CarbonCostOfEcuador} />

              <Route exact path="/InTheKnowMedellin" component={InTheKnowMedellin} />
              <Route exact path="/InTheKnowQuito" component={InTheKnowQuito} />
              <Route exact path="/InTheKnowGuatape" component={InTheKnowGuatape} />

              <Route exact path="/CostaRica" component={CostaRica} />
              <Route exact path="/Granada" component={Granada} />
              <Route exact path="/Ometepe" component={Ometepe} />
              <Route exact path="/Cartagena" component={Cartagena} />
              <Route exact path="/Quindo" component={Quindio} />
              <Route exact path="/Guatape" component={Guatape} />
              <Route exact path="/Medellin" component={Medellin} />
              <Route exact path="/Quito" component={Quito} />
              <Route exact path="/Otavalo" component={Otavalo} />
              <Route exact path="/Arequipa" component={Arequipa} />

              <Route exact path="/Cusco" component={Cusco} />
              <Route exact path="/Huacachina" component={Huacachina} />
              <Route exact path="/SacredValley" component={SacredValley} />
              <Route exact path="/PanamaCity" component={PanamaCity} />
              <Route exact path="/Huaraz" component={Huaraz}/>
            </Switch>
            </ScrollToTop>
          </Suspense>
        </Router>

    </>
  );
}

export default App;

//
// <Route exact path="/WhistlerFoodGuide" component={WhistlerFoodGuide} />
// <Route exact path="/WhistlerActivityGuide" component={WhistlerActivityGuide} />
// <Route exact path="/VancouverFoodGuide" component={VancouverFoodGuide} />
// <Route  exact path="/VancouverActivityGuide" component={VancouverActivityGuide} />


// <Route exact path="/about" component={Main} />
// <Route exact path="/blogs" component={Main} />
// <Route exact path="/galleries" component={Main} />
