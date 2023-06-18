import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SearchBar from "./components/SearchBar/SearchBar";
import Wrapper from "./components/UI/Wrapper";
import SliderPhotos from "./components/Slider/SliderPhotos";
import ShopifySection from "./components/ShopifySection/ShopifySection";
import AdInformation from "./components/AdInformation/AdInformation";
import FavoriteCategoriesSection from "./components/FavoriteCategoriesSection/FavoriteCategoriesSection.js";
import Newsletter from "./components/Newsletter/Newsletter.js";
import VideoSection from "./components/VideoSection/VideoSection.js";

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
  const titleTextForPans = ["Pans"];
  const titleTextForFavorites = ["Favorite Szama Accessories"];
  const titleTextForOriental = ["Maybe something oriental?"];

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

  const photosForPans = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cmgora_b16d60e3-4f6c-4676-9d1b-0f6e41528c49.jpg?v=1646130349&width=540",
  ];

  const priceForPans = [10, 10, 10, 10, 10, 10, 10, 10];
  const rateForPans = [5, 5, 5, 5, 5, 5, 5, 5];

  const photosForFavorites = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamaMozdzierzkuchennyaranz.jpg?v=1651312275&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Deskadokrojeniadebowa.jpg?v=1624390160&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Lyzka_miarka_zestaw.jpg?v=1649595184&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamawagakuchennaRhino2kg-0_1g.jpg?v=1626623772&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Tarka_szescioboczna_Florina_Esagonale.jpg?v=1631740723&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pokrywka_zaroodporna_z_silikonem_3w1_242628cm_0544e6ca-6d38-4009-8903-3ee198ebdbc4.jpg?v=1634502039&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Wyciskacz_do_czosnku_PROFESSIONAL.jpg?v=1634337840&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/wokring.jpg?v=1671367064&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pokrywa_zaroodporna_Florina_28_cm.jpg?v=1633819546&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Blacha_do_muffinek_na_6babeczek_28x18x3_5cm_Florina_Likoris.jpg?v=1629409204&width=540",
  ];

  const priceForFavorites = [5, 10, 2, 12, 1, 3, 2, 2, 2, 2];
  const rateForFavorites = [5, 5, 5, 5, 5, 5, 5, 5];

  const photosForOriental = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Panierka_Panko_200g.png?v=1654097521&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Tamaryndowa.jpg?v=1654100096&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_zielona.jpg?v=1654099447&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_sos_rybny.jpg?v=1654101701&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Makaron_ryzowy_5mm_200g.jpg?v=1654100440&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_czerwona.jpg?v=1654099102&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_Zolta.jpg?v=1654099673&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/RyzJasminowyAsiaKitchen1000g.jpg?v=1654174071&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_OCET_RYZOWY_150ml.jpg?v=1627221864&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Makaron_ryzowy_5mm_400g.jpg?v=1654100821&width=360",
  ];

  const prciesForOriental = [2, 2, 2, 2, 1, 2, 2, 3, 1, 1];
  const rateForOriental = [5, 5, 5, 5, 5, 5, 5, 5];

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

  const photosOnHoverFosPans = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Patelniastalowanierdzewna-STALGAST28cm_0c87a373-f906-4aeb-9ac6-76595d3f8ec0_1800x1800.jpg?v=1646130349",
  ];

  const photosOnHoverForFavorites = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamaMozdzierzkuchenny3_1800x1800.jpg?v=1651312275",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Deskadokrojeniadebowa21-1_1800x1800.jpg?v=1624390160",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Lyzka_miarka_zestaw_1800x1800.jpg?v=1649595184",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamawagakuchennaRhino2kg-0_1g_1800x1800.jpg?v=1626623772",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Tarka_szescioboczna_Florina_Esagonale_1800x1800.jpg?v=1631740723",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pokrywka_zaroodporna_z_silikonem_3w1_242628cm_0544e6ca-6d38-4009-8903-3ee198ebdbc4.jpg?v=1634502039&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Wyciskacz_do_czosnku_PROFESSIONAL_1800x1800.jpg?v=1634337840",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/wokring2_1800x1800.jpg?v=1671367064",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pokrywa_zaroodporna_Florina_28_cm_etykieta_1800x1800.jpg?v=1633819546",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Blacha_do_muffinek_na_6babeczek_28x18x3_5cm_Florina_Likoris_etykieta_gora_1800x1800.jpg?v=1629409212",
  ];

  const photosOnHoverForOriental = [
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Panierka_Panko_200g.png?v=1654097521&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Tamaryndowa.jpg?v=1654100096&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_zielona.jpg?v=1654099447&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_sos_rybny.jpg?v=1654101701&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Makaron_ryzowy_5mm_200g.jpg?v=1654100440&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_czerwona.jpg?v=1654099102&width=360",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Pasta_Curry_Zolta.jpg?v=1654099673&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/RyzJasminowyAsiaKitchen1000g.jpg?v=1654174071&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_OCET_RYZOWY_150ml.jpg?v=1627221864&width=540",
    "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_Makaron_ryzowy_5mm_400g.jpg?v=1654100821&width=360",
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
      <ShopifySection
        pricesForShopSection={priceForPans}
        titleTextForShopSection={titleTextForPans}
        photosForShopSection={photosForPans}
        photosOnHoverForShopSection={photosOnHoverFosPans}
        rateForShopSection={rateForPans}
      />
      <ShopifySection
        pricesForShopSection={priceForFavorites}
        titleTextForShopSection={titleTextForFavorites}
        photosForShopSection={photosForFavorites}
        photosOnHoverForShopSection={photosOnHoverForFavorites}
        rateForShopSection={rateForFavorites}
      />
      <VideoSection />
      <ShopifySection
        pricesForShopSection={prciesForOriental}
        titleTextForShopSection={titleTextForOriental}
        photosForShopSection={photosForOriental}
        photosOnHoverForShopSection={photosOnHoverForOriental}
        rateForShopSection={rateForOriental}
      />
    </Wrapper>
  );
}

export default App;
