import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <StyledButton onClick={onClick}>{text}</StyledButton>;
  }
}

export default Button;
