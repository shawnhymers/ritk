import './styles/App.css';
import './styles/borders.css';
import './styles/colours.css';
import './styles/elements.css';
import './styles/errors.css';
import './styles/form.css';
import './styles/images.css';
import './styles/layout.css';
import './styles/text.css';
import './styles/effects.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/main.js';

import WhistlerFoodGuide from './components/app/blogs/whistlerFoodGuide';
import WhistlerActivityGuide from './components/app/blogs/whistlerActivityGuide';
import VancouverFoodGuide from './components/app/blogs/vancouverFoodGuide';
import VancouverActivityGuide from './components/app/blogs/vancouverActivityGuide';
import CarbonCostOfLatam from './components/app/blogs/carbonCostOfLatam';
import CarbonCostOfFlying from './components/app/blogs/carbonCostOfFlying';
import CarbonCostOfColombia from './components/app/blogs/carbonCostOfColombia';
import CarbonCostOfEcuador from './components/app/blogs/carbonCostOfEcuador';
import CarbonCostOfDiet from  './components/app/blogs/carbonCostOfDiet';

import InTheKnowQuito from './components/app/blogs/inTheKnowQuito'
import InTheKnowGuatape from './components/app/blogs/inTheKnowGuatape'
import InTheKnowMedellin from './components/app/blogs/inTheKnowMedellin'

import CostaRica from './components/app/galleries/costaRica'
import Granada from './components/app/galleries/granada'
import Ometepe from './components/app/galleries/ometepe'
import Cartagena from './components/app/galleries/cartagena'
import Guatape from './components/app/galleries/guatape'
import Quindio from './components/app/galleries/quindio'
import Medellin from './components/app/galleries/medellin'
import Quito from './components/app/galleries/quito'
import Otavalo from './components/app/galleries/otavalo'

import ScrollToTop from "./components/helpers/scrollToTop"
function App() {

  return (
    <>

        <Router>
          <ScrollToTop>
            <Route exact path="/" component={Main} />
            <Route exact path="/home/:redirectView" component={Main} />

            <Route exact path="/WhistlerFoodGuide" component={WhistlerFoodGuide} />
            <Route exact path="/WhistlerActivityGuide" component={WhistlerActivityGuide} />
            <Route exact path="/VancouverFoodGuide" component={VancouverFoodGuide} />
            <Route exact path="/VancouverActivityGuide" component={VancouverActivityGuide} />

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

          </ScrollToTop>
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
