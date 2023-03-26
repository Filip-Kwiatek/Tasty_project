import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";

function App() {
  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
    </Wrapper>
  );
}

export default App;
