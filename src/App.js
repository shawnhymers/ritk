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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Main from './components/main.js';

import WhistlerFoodGuide from './components/app/blogs/whistlerFoodGuide';
import WhistlerActivityGuide from './components/app/blogs/whistlerActivityGuide';
import VancouverFoodGuide from './components/app/blogs/vancouverFoodGuide';
import VancouverActivityGuide from './components/app/blogs/vancouverActivityGuide';

import ScrollToTop from "./components/helpers/scrollToTop"
function App() {

  return (
    <>

        <Router>
          <ScrollToTop>
            <Route exact path="/" component={Main} />
            <Route exact path="/VancouverFoodGuide" component={VancouverFoodGuide} />
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
