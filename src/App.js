import logo from "./logo.svg";
import "./App.css";
import "./images/fsf-header-logo@2x.png";
import React from "react";
import MapPage from './components/MapPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <img class="imageHalf" src="http://localhost:3000/images/fsf-header-logo@2x.png"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/map" className="nav-link">Map</Link>
              </li>
              <li className="nav-item">
                <a href="https://feedingsouthflorida.org/who-we-are/" target = "_blank" rel="noreferrer" className="nav-link">Who we are</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <Switch>
            <Route path="/map">
              <MapPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}



