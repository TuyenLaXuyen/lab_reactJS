import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, NavbarBand } from "reactstrap";
import Menu from "./components/MenuComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            {/* <NavbarBand href="/">Ristorante Con Fusion</NavbarBand> */}
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
