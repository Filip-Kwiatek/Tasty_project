import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import Slider from "./components/Slider/Slider";
import ShopifySection from "./components/ShopifySection/ShopifySection";

function App() {
  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
      <Slider /> 
      <ShopifySection />
    </Wrapper>
  );
}

export default App;
