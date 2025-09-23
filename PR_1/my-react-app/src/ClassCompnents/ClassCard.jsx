import React from "react";

import "./ClassCard.css";

class ClassCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="cardContainer">
            <div className="cardCompment">
              <img src={this.props.img} alt="Profile" />
              <h1>{this.props.name}</h1>
              <h3>Age: {this.props.age}</h3>
              <h3>Gender: {this.props.gender}</h3>
              <h3>Mobile No: {this.props.mobileNo}</h3>
              <p>Email: {this.props.email}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCard;