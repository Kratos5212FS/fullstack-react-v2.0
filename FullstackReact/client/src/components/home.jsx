import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Ghaleb's Website" className="text-center" />
        <div className="row">
          <div className="col-12">
            <div className="container">
              <p>Welcome to my website</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
