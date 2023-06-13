import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import SliderPhotos from "./components/Slider/SliderPhotos";
import ShopifySection from "./components/ShopifySection/ShopifySection";
import AdInformation from "./components/AdInformation/AdInformation";
import FavoriteCategoriesSection from "./components/FavoriteCategoriesSection/FavoriteCategoriesSection.js";
import Newsletter from "./components/Newsletter/Newsletter.js";

function App(props) {
  const photosForFoodTypeOne = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_LunchBOXy_glass_pluss_Image_banerHome.jpg?v=1679430629&width=1000",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_LunchBOX-bambus_31d74305-fb3f-429a-8792-905742a7b39f.jpg?v=1678699625&width=1200",
  ];

  const photosForFoodTypeTwo = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_Mieszanki_Przypraw_a5fd467e-1d64-49d4-869b-ca8162bda70f.jpg?v=1679410836&width=1200",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama.jpg?v=1639427887&width=900",
  ];
  const photosForFoodTypeThree = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_WOK_homePage.jpg?v=1679416092&width=1001",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/files/Policzona_Szama_WOK_homePage.jpg?v=1679416092&width=1001",
  ];

  const headerTextForFoodTypeOne = [
    "Prepare meals in a healthy and fast way",
    "New line of Lunch Boxes is now available",
  ];
  const headerTextForFoodTypeTwo = ["Try now!", "Try now!"];
  const headerTextForFoodTypeThree = ["Hot Stuff", "Hot Stuff"];
  const mainTextForFoodTypeOne = [
    "Lunch Boxes from Shama",
    "Stainless steel Lunch Boxes",
  ];
  const mainTextForFoodTypeTwo = [
    "Special mix of spices",
    "Special mix of spices",
  ];
  const mainTextForFoodTypeThree = [
    "Original forged steel wok",
    "Original forged steel wok",
  ];
  const descriptionTextForFoodTypeOne = [
    "Natural materials - glass, bamboo, stainless steel.",
    "Only such boxes - durable and hygienic. The highest quality.",
  ];
  const descriptionTextForFoodTypeTwo = [
    "Spices without or with reduced salt content. ",
    "Spices without or with reduced salt content. ",
  ];
  const descriptionTextForFoodTypeThree = [
    "Real oriental taste within reach",
    "Real oriental taste within reach",
  ];
  const titleTextForBoxes = ["Boxes"];
  const titleTextForSpices = ["Spices"];

  const photosForBoxes = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Szklany_pojemnik_na_zywnosc_z_bambusowa_pokrywka_640_ml1_1800x1800.jpg?v=1626305036",
  ];

  const priceForBoxes = [10, 10, 10, 10, 10, 10, 10, 10];
  const rateForBoxes = [5, 5, 5, 5, 5, 5, 5, 5];
  const photosForSpices = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama.jpg?v=1639427887&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PrzyprawaSzama1-1.jpg?v=1624987253&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_1.jpg?v=1626950997&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama-Przyprawa_Mieszanka_Arabska-1-1.jpg?v=1637601247&width=540",
  ];

  const priceForSpices = [5, 5, 5, 5];
  const rateForSpices = [5, 5, 5, 5, 5, 5, 5, 5];

  const photosOnHoverForBoxes = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Szklanypojemniknazywnosczbambusowapokrywka640ml21-1_1800x1800.jpg?v=1626729699",
  ];

  const photosOnHoverForSpices = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Przyprawa_Chinska.jpg?v=1637602122&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PrzyprawaSzama1-1.jpg?v=1624987253&width=900",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona-Szama-Mieszanka-Przypraw-zastepujaca-sol-ZIOLA_KOKSA_1.jpg?v=1626950997&width=720",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama-Przyprawa_Mieszanka_Arabska-1-1.jpg?v=1637601247&width=900",
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
        pricesForShopSection={priceForBoxes}
        titleTextForShopSection={titleTextForBoxes}
        photosForShopSection={photosForBoxes}
        photosOnHoverForShopSection={photosOnHoverForBoxes}
        rateForShopSection={rateForBoxes}
      />
      <SliderPhotos
        photosForSlider={photosForFoodTypeTwo}
        mainTextForSlider={mainTextForFoodTypeTwo}
        headerTextForSlider={headerTextForFoodTypeTwo}
        descriptionTextForSlider={descriptionTextForFoodTypeTwo}
      />
      <ShopifySection
        pricesForShopSection={priceForSpices}
        titleTextForShopSection={titleTextForSpices}
        photosForShopSection={photosForSpices}
        photosOnHoverForShopSection={photosOnHoverForSpices}
        rateForShopSection={rateForSpices}
      />
      <AdInformation />
      <FavoriteCategoriesSection />
      <SliderPhotos
        photosForSlider={photosForFoodTypeThree}
        mainTextForSlider={mainTextForFoodTypeThree}
        headerTextForSlider={headerTextForFoodTypeThree}
        descriptionTextForSlider={descriptionTextForFoodTypeThree}
      />
      <Newsletter />
    </Wrapper>
  );
}

export default App;
