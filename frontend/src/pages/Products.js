import React from "react";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
// import {Link} from "react-router-dom";
const Products = () => {
  const cardData = [
    {
      prodId: 1,
      title: "Card 1",
      description: "Description for Card 1",
      image:
        "https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1680514083-1.jpg",
      price: 399
    },
    {
      prodId: 2,
      title: "Card 2",
      description: "Description for Card 2",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687415763_3583808.jpg?format=webp&w=240&dpr=1.5",
      price: 399
    },
    {
      prodId: 3,
      title: "Card 3",
      description: "Description for Card 3",
      image:
        "https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1680514083-1.jpg",
      price: 399
    },
    {
      prodId: 4,
      title: "Card 4",
      description: "Description for Card 4",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687415763_3583808.jpg?format=webp&w=240&dpr=1.5",
      price: 399
    },
    {
      prodId: 5,
      title: "Card 1",
      description: "Description for Card 1",
      image:
        "https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1680514083-1.jpg",
      price: 399
    },
    {
      prodId: 6,
      title: "Card 2",
      description: "Description for Card 2",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687415763_3583808.jpg?format=webp&w=240&dpr=1.5",
      price: 399
    },
    {
      prodId: 7,
      title: "Card 3",
      description: "Description for Card 3",
      image:
        "https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1680514083-1.jpg",
      price: 399
    },
    {
      prodId: 8,
      title: "Card 4",
      description: "Description for Card 4",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687415763_3583808.jpg?format=webp&w=240&dpr=1.5",
      price: 399
    }
  ];

  return (
    <div>
      <Grid container>
        {cardData.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              prodId={data.prodId}
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
