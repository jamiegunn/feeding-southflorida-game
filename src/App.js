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
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/map" class="nav-link">Map</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="row">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
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

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
