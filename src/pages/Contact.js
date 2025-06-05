import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <p>Reach us at contact@example.com</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Contact;
