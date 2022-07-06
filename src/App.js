import React, { Component } from "react";
import "./App.css";
import { STAFFS } from "./shared/staff";
import { Navbar } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StaffList from "./components/StaffLishComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <p>Ứng dụng quản lý nhân sự v1.0</p>
          </div>
        </Navbar>
        <StaffList />
      </div>
    );
  }
}

export default App;
