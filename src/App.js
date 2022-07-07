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
          <div className="container text-start ">
            <h4>Ứng dụng quản lý nhân sự v1.0</h4>
            Số cột : <input id="input-col" />
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}
const col = document.getElementById("input-col").value;
console.log(col);
export default App;
