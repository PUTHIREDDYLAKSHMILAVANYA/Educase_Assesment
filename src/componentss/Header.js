import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5em;
`;

class Header extends Component {
  render() {
    return <HeaderContainer>My React App</HeaderContainer>;
  }
}

export default Header;
