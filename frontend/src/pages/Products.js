import React from "react";
import Card from "../components/Card";

const Products = () => {
  return (
    <div>
      <Card
        image="https://images.bewakoof.com/t640/men-s-white-vengeance-typography-oversized-t-shirt-519142-1680514083-1.jpg"
        title="Vengace tshirt"
        description="an over sized tshirt "
        price={399}
      />
      <Card
        image="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687415763_3583808.jpg?format=webp&w=240&dpr=1.5"
        title="Vengace tshirt"
        description="an over sized tshirt "
        price={399}
      />
    </div>
  );
};

export default Products;
