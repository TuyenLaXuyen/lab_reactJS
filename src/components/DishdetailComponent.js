import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  RenderComments(comments) {
    if (comments != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li>
                  <p>{comment.comment}</p>
                  <p>{comment.rating} stars</p>
                  <p>
                    -- {comment.author.firstname} {comment.author.lastname} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.selectedDish != null &&
          this.state.selectedDish.comments != null
            ? this.RenderComments(this.state.selectedDish.comments)
            : null}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
