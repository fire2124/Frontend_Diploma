import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./pages/News";
import Delays from "./pages/Delays";
import Traffic_restrictions from "./pages/Traffic_restrictions";
import Occupancy_of_Stops from "./pages/Occupancy_of_Stops";
import Predictions_of_Delays from "./pages/Predictions_of_Delays";
import Statistics from "./pages/Statistics";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import firebase from "firebase";
import NavBar from "./components/Nav/Navbar";
import "./App.css";
import "./assets/add.css";
import "./assets/main.css";

const firebaseConfig = {
  apiKey: "AIzaSyDjxpW0xPHPlh-MV4BxoJ6LH3hnJMo9Edo",
  authDomain: "frontenddiploma.firebaseapp.com",
  projectId: "frontenddiploma",
  storageBucket: "frontenddiploma.appspot.com",
  messagingSenderId: "49895695964",
  appId: "1:49895695964:web:c8a53446e1bd004d62a899",
  measurementId: "G-N88RWTGXBL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Sentry.init({
  dsn:
    "https://1ca76d280dac4fb4a03f003ae5cacae3@o368587.ingest.sentry.io/5666370",
  integrations: [new Integrations.BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <BrowserRouter>
            <NavBar />
            <Route path="/" component={News} />
            <Route path="/delays" component={Delays} />
            <Route
              path="/traffic_restrictions"
              component={Traffic_restrictions}
            />
            <Route path="/occupancy_of_stops" component={Occupancy_of_Stops} />
            <Route
              path="/predictions_of_delays"
              component={Predictions_of_Delays}
            />
            <Route path="/statistics" component={Statistics} />
          </BrowserRouter>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
