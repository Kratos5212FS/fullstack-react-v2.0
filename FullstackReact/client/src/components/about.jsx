import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  
  render() {
    let img = {
      width: "80%"
    };

    return (
      <div className="container">
        <PageHeader titleText="About my Website" />
        <div className="row">
          <div className="col-12">
            <div className="container">
              <p>On my website you can sign up as a normal user to browse different cards made by bussiness users to help them hrow and self advertise this is just a demo for a project for react.</p>
              <img src="https://irishadvantage.us/app/uploads/2020/05/0-31.jpeg" alt="rdmpic" style={img}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
