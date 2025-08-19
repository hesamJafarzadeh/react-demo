import React from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 1",
    price: 120000,
    image: "https://placehold.co/600x400",
  },
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 2",
    price: 85000,
    image: "https://placehold.co/600x400",
  },
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 3",
    price: 99000,
    image: "https://placehold.co/600x400",
  },
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 1",
    price: 120000,
    image: "https://placehold.co/600x400",
  },
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 2",
    price: 85000,
    image: "https://placehold.co/600x400",
  },
  {
    id: Date.now() * Math.random(1, 1000),
    name: "product - 3",
    price: 99000,
    image: "https://placehold.co/600x400",
  },
];

export default function ProductList() {
  return (
    <>
      <p className="text-4xl font-bold my-8">Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
