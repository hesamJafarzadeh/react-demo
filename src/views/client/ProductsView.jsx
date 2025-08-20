import ProductList from "./../../components/client/products/ProductList";
import { useState, useEffect } from "react";
import api from "../../plugins/axios";

export default () => {
  // states
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch product list from api
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/posts");
      setProducts([...res.data]);
    } catch (error) {
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // just on mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p className="text-gray-500 mt-8 space-y-6">Loading products ...</p>;
  }

  return (
    <div>
      <p className="flex items-center justify-between text-2xl font-bold my-8 border-b border-gray-100 pb-4">
        Products
        <span className="text-base text-gray-400">
          Total: {products.length} items
        </span>
      </p>
      <ProductList products={products} />
    </div>
  );
};
