import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import News from "./pages/News";
import Delays from "./pages/Delays";
import TrafficRestrictions from "./pages/Traffic_restrictions";
import OccupancyOfStops from "./pages/Occupancy_of_Stops";
import PredictionsOfDelays from "./pages/Predictions_of_Delays";
import Statistics from "./pages/Statistics";
import NavBar from "./components/Nav/Navbar";
import "./App.css";
import "./assets/add.css";
import "./assets/main.css";
import { GlobalStyle } from "./GlobalStyles";
import  { firebaseInitialze }  from "./services/firebase";
import  {sentry}  from "./services/sentry";

firebaseInitialze()
sentry();

//Todo: navbar change of pages
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="min-h-screen">
            <GlobalStyle />

            <NavBar />
         
              <Route path="/">
                <News />
              </Route>
              <Route path="/delays">
                <Delays />
              </Route>
              <Route path="/traffic_restrictions">
                <TrafficRestrictions />
              </Route>
              <Route path="/occupancy_of_stops">
                <OccupancyOfStops />
              </Route>
              <Route path="/predictions_of_delays">
                <PredictionsOfDelays />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
            
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
