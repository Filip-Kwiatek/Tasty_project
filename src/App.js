import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import SliderPhotos from "./components/Slider/SliderPhotos";
import ShopifySection from "./components/ShopifySection/ShopifySection";
import AdInformation from "./components/AdInformation/AdInformation";

function App(props) {
  const photosForFoodTypeOne = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_LunchBOXy_glass_pluss_Image_banerHome.jpg?v=1679430629&width=1000",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_LunchBOX-bambus_31d74305-fb3f-429a-8792-905742a7b39f.jpg?v=1678699625&width=1200",
  ];

  const photosForFoodTypeTwo = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_Mieszanki_Przypraw_a5fd467e-1d64-49d4-869b-ca8162bda70f.jpg?v=1679410836&width=1200",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama.jpg?v=1639427887&width=900",
  ];

  const headerTextForFoodTypeOne = [
    "Prepare meals in a healthy and fast way",
    "New line of Lunch Boxes is now available",
  ];
  const headerTextForFoodTypeTwo = ["Try now!", "Try now!"];
  const mainTextForFoodTypeOne = [
    "Lunch Boxes from Shama",
    "Stainless steel Lunch Boxes",
  ];
  const mainTextForFoodTypeTwo = [
    "Special mix of spices",
    "Special mix of spices",
  ];

  const descriptionTextForFoodTypeOne = [
    "Natural materials - glass, bamboo, stainless steel.",
    "Only such boxes - durable and hygienic. The highest quality.",
  ];
  const descriptionTextForFoodTypeTwo = [
    "Spices without or with reduced salt content. ",
    "Spices without or with reduced salt content. ",
  ];

  const titleTextForBoxes = ["Boxes"];
  const titleTextForSpices = ["Spices"];

  const photosForBoxes = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Pojemnik_LunchBOX_szklany_bambus-1520ml-1.jpg?v=1658073713",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
  ];
  const photosForSpices = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama.jpg?v=1639427887&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PrzyprawaSzama1-1.jpg?v=1624987253&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_1.jpg?v=1626950997&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama-Przyprawa_Mieszanka_Arabska-1-1.jpg?v=1637601247&width=540",
  ];

  const photosOnHoverForBoxes = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_5.jpg?v=1673222123",
  ];

  const photosOnHoverForSpices = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Przyprawa_Chinska.jpg?v=1637602122&width=540",
  ];

  return (
    <Wrapper>
      <SearchBar />
      <Navbar />
      <SliderPhotos
        photosForSlider={photosForFoodTypeOne}
        mainTextForSlider={mainTextForFoodTypeOne}
        headerTextForSlider={headerTextForFoodTypeOne}
        descriptionTextForSlider={descriptionTextForFoodTypeOne}
      />
      <ShopifySection
        titleTextForShopSection={titleTextForBoxes}
        photosForShopSection={photosForBoxes}
        photosOnHoverForShopSection={photosOnHoverForBoxes}
      />
      <SliderPhotos
        photosForSlider={photosForFoodTypeTwo}
        mainTextForSlider={mainTextForFoodTypeTwo}
        headerTextForSlider={headerTextForFoodTypeTwo}
        descriptionTextForSlider={descriptionTextForFoodTypeTwo}
      />
      <ShopifySection
        titleTextForShopSection={titleTextForSpices}
        photosForShopSection={photosForSpices}
        photosOnHoverForShopSection={photosOnHoverForSpices}
      />
      <AdInformation/>
    </Wrapper>
  );
}

export default App;
