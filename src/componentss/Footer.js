import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        © 2025 React Assignment. All rights reserved.
      </FooterContainer>
    );
  }
}

export default Footer;
