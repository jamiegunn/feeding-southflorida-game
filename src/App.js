import "./App.css";
import "./images/fsf-header-logo@2x.png";
import React from "react";
import MapPage from './components/MapPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img className="imageHalf" src="http://localhost:3000/images/fsf-header-logo@2x.png"/>
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
            <span className="navbar-toggler-icon" />
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
		<div className="row footerExtraBottomMargin">
		<div className="col-md-12 fixed-bottom text-center footerExtraBottomMargin">
			<p><i>Coded by Feeding South Florida Gang at Palm Beach Tech Hackathon 2020!</i></p>
			<br></br>
		</div>
		<div className="row">
			<div className="col-xs-12 fixed-bottom footerExtraBottomMargin footerBottomBottomColor text-center">
			© Feeding South Florida is a 501 (c)(3). © 2020 All rights reserved.</div>
			</div>
		</div>
      </div>
    </Router>
  );
}



