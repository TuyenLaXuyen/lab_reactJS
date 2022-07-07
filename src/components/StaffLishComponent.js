import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      col: "col-lg-3 col-md-5 col-xs-12 m-1 text-start ",
      classauto: "btn btn-success m-2",
      class2: "btn btn-warning m-2",
      class3: "btn btn-warning m-2",
      class6: "btn btn-warning m-2",
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  // Set col auto
  onColSetauto() {
    this.setState({
      col: "col-lg-3 col-md-5 col-xs-12 m-1 text-start ",
      classauto: "btn btn-success m-2",
      class2: "btn btn-warning m-2",
      class3: "btn btn-warning m-2",
      class6: "btn btn-warning m-2",
    });
    console.log(this.state.col);
  }

  // Set col = 2
  onColSet2() {
    this.setState({
      col: "col-5 m-1 text-start ",
      classauto: "btn btn-warning m-2",
      class2: "btn btn-success m-2",
      class3: "btn btn-warning m-2",
      class6: "btn btn-warning m-2",
    });
    console.log(this.state.col);
  }

  // Set col = 3
  onColSet3() {
    this.setState({
      col: "col-3 m-1 text-start ",
      classauto: "btn btn-warning m-2",
      class2: "btn btn-warning m-2",
      class3: "btn btn-success m-2",
      class6: "btn btn-warning m-2",
    });
    console.log(this.state.col);
  }

  // Set col = 6
  onColSet6() {
    this.setState({
      col: "col-2  text-start ",
      classauto: "btn btn-warning m-2",
      class2: "btn btn-warning m-2",
      class3: "btn btn-warning m-2",
      class6: "btn btn-success m-2",
    });
    console.log(this.state.col);
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <Card
          style={{
            backgroundColor: "#98ee80",
            borderColor: "#333",
          }}
          className="col-lg-3 col-md-5 col-xs-12 m-1 text-start "
        >
          <CardTitle tag="h3">{staff.name}</CardTitle>
          <CardText>
            Ngày sinh:{" "}
            {new Intl.DateTimeFormat("en-GB").format(
              new Date(Date.parse(staff.doB))
            )}
          </CardText>
          <CardText>
            Ngày vào công ty:{" "}
            {new Intl.DateTimeFormat("en-GB").format(
              new Date(Date.parse(staff.startDate))
            )}
          </CardText>
          <CardText>Phòng ban: {staff.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const liststaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className={this.state.col}>
          <Card
            style={{
              backgroundColor: "#98ee80",
              borderColor: "#333",
            }}
            onClick={() => this.onStaffSelect(staff)}
          >
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div>
          {" "}
          <button
            onClick={() => this.onColSetauto()}
            id="btn-save "
            className={this.state.classauto}
          >
            Auto
          </button>
          <button
            onClick={() => this.onColSet2()}
            id="btn-save "
            className={this.state.class2}
          >
            Col-2
          </button>
          <button
            onClick={() => this.onColSet3()}
            id="btn-save"
            className={this.state.class3}
          >
            Col-3
          </button>
          <button
            onClick={() => this.onColSet6()}
            id="btn-save"
            className={this.state.class6}
          >
            Col-6
          </button>
        </div>
        <div className="row">{liststaff}</div>
        <div className="row m-1">
          {this.state.selectedStaff != null
            ? this.renderStaff(this.state.selectedStaff)
            : "Bấm vào tên nhân viên để xem thông tin"}
        </div>
      </div>
    );
  }
}

export default StaffList;
