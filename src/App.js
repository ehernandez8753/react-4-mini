import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>

    );
  }
}

export default App;
