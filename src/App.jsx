import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 space-y-8   text-gray-800">
      {/* Hero */}
      <section className="grid grid-cols-1 py-16 text-center space-y-8 gap-y-8 px-4 bg-gradient-to-r from-indigo-100 to-white rounded-2xl shadow">
        {/* welcome */}
        <h1 className="text-4xl font-bold mb-4">Welcome to my E-Shop</h1>

        {/* slogan */}
        <p className="text-gray-600 mb-6">
          The newest products with the best Prices
        </p>

        {/* button */}
        <div>
          <Link
            to="/products"
            className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600"
          >
            See All Products
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-gradient-to-l from-indigo-100 to-white rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Shoes", "Dresses", "Accessories", "Electorincs"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md text-center"
            >
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
