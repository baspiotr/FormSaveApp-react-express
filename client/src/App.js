import React from "react";
import styled from "styled-components";
import GuestForm from "./components/GuestForm";
import { Provider } from "react-redux";
import store from "./store";

const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;

  background-color: #333333;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GuestForm></GuestForm>
      </Container>
    </Provider>
  );
}

export default App;
