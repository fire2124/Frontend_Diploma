import React, { Component } from "react";
import { matchPath } from "react-router";


class Delays extends Component {
 

  render() {
    const isNews = !!matchPath(
      this.props.location.pathname, 
      '/'
    );
    console.log(isNews)
    return (
      <div className="background"> Delays</div>
   
    );
  }
}

export default Delays;