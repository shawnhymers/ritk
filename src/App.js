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
import './styles/speechBubbles.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './components/main';
// import Blog from './components/blog'
import CalculatorPage from './components/calculator'
import AboutPage from "./components/about"
import BlogPage from "./components/blogs"
import GalleryPage from './components/galleries'

import WhistlerFoodGuide from './components/blogs/whistlerFoodGuide';
import WhistlerActivityGuide from './components/blogs/whistlerActivityGuide';
import VancouverFoodGuide from './components/blogs/vancouverFoodGuide';
import VancouverActivityGuide from './components/blogs/vancouverActivityGuide';
import CarbonCostOfLatam from './components/blogs/carbonCostOfLatam';
import CarbonCostOfFlying from './components/blogs/carbonCostOfFlying';
import CarbonCostOfColombia from './components/blogs/carbonCostOfColombia';
import CarbonCostOfEcuador from './components/blogs/carbonCostOfEcuador';
import CarbonCostOfDiet from  './components/blogs/carbonCostOfDiet';
import BanosActivityGuide from './components/blogs/banosActivityGuide';
import MedellinFoodGuide from "./components/blogs/medellinFoodGuide"

import InTheKnowQuito from './components/blogs/inTheKnowQuito'
import InTheKnowGuatape from './components/blogs/inTheKnowGuatape'
import InTheKnowMedellin from './components/blogs/inTheKnowMedellin'

import CostaRica from './components/galleries/costaRica'
import Granada from './components/galleries/granada'
import Ometepe from './components/galleries/ometepe'
import Cartagena from './components/galleries/cartagena'
import Guatape from './components/galleries/guatape'
import Quindio from './components/galleries/quindio'
import Medellin from './components/galleries/medellin'
import Quito from './components/galleries/quito'
import Otavalo from './components/galleries/otavalo'

import ScrollToTop from "./components/helpers/scrollToTop"
function App() {

  return (
    <>

        <Router>
          <ScrollToTop>

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


// <Route exact path="/about" component={Main} />
// <Route exact path="/blogs" component={Main} />
// <Route exact path="/galleries" component={Main} />
