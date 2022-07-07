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
            Số cột : <input id="input-col" />{" "}
            <button id="btn-save" className="btn btn-success">
              Save
            </button>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
const col = document.getElementById("input-col");
const saveBtn = document.getElementById("btn-save");
saveBtn.addEventListener("click", function () {
  console.log("abc");
});
