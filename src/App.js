import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import SliderPhotos from "./components/Slider/SliderPhotos";
import ShopifySection from "./components/ShopifySection/ShopifySection";

function App(props) {
  const photosForFoodTypeOne = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Pad_Thai_-_prosty_przepis_Policzona_Szama_blog.jpg?v=1669244451",
  ];

  const photosForFoodTypeTwo = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Pad_Thai_-_prosty_przepis_Policzona_Szama_blog.jpg?v=1669244451",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
  ];
  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
      <SliderPhotos photosForSlider={photosForFoodTypeOne} />
      <ShopifySection />
      <SliderPhotos photosForSlider={photosForFoodTypeTwo} />
    </Wrapper>
  );
}

export default App;
