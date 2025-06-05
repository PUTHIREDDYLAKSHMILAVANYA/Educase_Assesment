import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  height: 667px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <h1>Welcome to the App!</h1>
    </Container>
  );
};

export default Home;
