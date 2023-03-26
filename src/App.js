import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
      <Slider />
    </Wrapper>
  );
}

export default App;
