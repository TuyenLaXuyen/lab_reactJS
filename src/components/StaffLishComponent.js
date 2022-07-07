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
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <Card className="col-lg-3 col-md-5 col-xs-12 m-1 text-start ">
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
    }
  }

  render() {
    console.log(this.props.staffs);
    const liststaff = this.props.staffs.map((staff) => {
      return (
        <div
          key={staff.id}
          className="col-lg-3 col-md-5 col-xs-12 m-1 text-start"
        >
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{liststaff}</div>
        <div className="row m-1">
          {this.state.selectedStaff != null
            ? this.renderStaff(this.state.selectedStaff)
            : "Bấm vào tên nhân viên để xem thông tin"}
        </div>
        <div className="row">Author is Tuyen</div>
      </div>
    );
  }
}

export default StaffList;
