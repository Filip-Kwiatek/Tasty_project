import React from "react";

const Opinion = () => {
  const combinedData = [
    {
      stars: "★★★★★",
      title: "Excelent Spices!",
      subtitle: "Delicious, aromatic spices",
      photo:
        "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/ZestawprzyprawPoliczonaSzama_112x112.jpg?v=1639427887",
      alt: "4 packages of spices",
      product: "Set of 4 Spice Mixes",
    },
    {
      stars: "★★★★★",
      title: "LunchBox",
      subtitle: "Great Product",
      photo:
        "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/PoliczonaSzamaSS1300PojemnikzestalinierdzewnejLunchBOX_112x112.jpg?v=1673801084",
      alt: "lunchbox",
      product: "Stainless steel lunchbox",
    },
    {
      stars: "★★★★★",
      title: "Great Product",
      subtitle: "Fast shipping",
      photo:
        "https://cdn.shopify.com/s/files/1/0559/7881/9741/products/Policzona_Szama_LunchBOXy_glass_pluss_trio_112x112.jpg?v=1649399348",
      alt: "set of 3 lunchboxes",
      product: "Set of 3 lunchboxes",
    },
  ];

  return (
    <>
      {combinedData.map(
        ({ stars, title, subtitle, photo, alt, product, index }) => {
          return (
            <ul key={index}>
              <li>{stars}</li>
              <li>{title}</li>
              <li>{subtitle}</li>
              <li>
                <img src={photo} alt={alt} />
              </li>
              <li>{product}</li>
            </ul>
          );
        }
      )}
    </>
  );
};

export default Opinion;
