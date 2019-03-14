import { h, Component } from "preact";
import { Router } from "preact-router";
import { Link } from "preact-router/match";

import "./app.scss";

import Home from "./Home/home";
import Settings from "./Settings/settings";
import About from "./About/about";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link activeClassName="active" href="/">
            Home
          </Link>
          <Link activeClassName="active" href="/about">
            About
          </Link>
          <Link activeClassName="active" href="/settings">
            Settings
          </Link>
        </nav>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Settings path="/settings" />
        </Router>
      </div>
    );
  }
}
