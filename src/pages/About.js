import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about section of the app.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default About;
