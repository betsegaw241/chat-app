import React from "react";
import Auth from "./Pages/Auth"
import Home from "./components/Home";
import { Container } from "./style/container";

function App() {
  return (
    <Container>
      {/* <Auth/> */}
      <Home/>
    </Container>
  );
}

export default App;
