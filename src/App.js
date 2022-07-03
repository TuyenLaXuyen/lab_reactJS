import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, NavbarBand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import Dishdetail from "./components/DishdetailComponent";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <p>Ristorante Con Fusion</p>
          </div>
        </Navbar>
        <Dishdetail dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
