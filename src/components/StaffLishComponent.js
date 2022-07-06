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

  render() {
    console.log(this.props.staffs);
    const liststaff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardImgOverlay>
              <CardTitle>{staff.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{liststaff}</div>
      </div>
    );
  }
}

export default StaffList;
