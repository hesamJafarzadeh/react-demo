import React, { Suspense, useEffect, useState, lazy } from "react";
import { Link, useParams } from "react-router";
import BaseBreadcrumb from "../../components/base/BaseBreadcrumb";
import api from "../../plugins/axios";

import BaseLoading from "./../../components/base/BaseLoading";
const ProductComments = lazy(() =>
  import("../../components/client/products/ProductComments")
);

export default function SneakerProductCard({}) {
  // states
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  console.log("ID", id);

  // on mount
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await api.get(`posts/${id}`);
        setProduct(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  if (!loading)
    return (
      <div>
        <div className="flex flex-col space-y-8">
          <Link
            to="/products"
            className="text-3xl border-b border-gray-200 py-4"
          >
            <span>Products</span>
          </Link>

          <BaseBreadcrumb
            items={[
              {
                label: "products",
                href: "/products",
              },
              {
                label: product.title,
              },
            ]}
          />
          <div className="grid lg:grid-cols-2 border border-gray-100 bg-white rounded-xl  overflow-hidden shadow-blue-100 shadow-sm">
            <div className="flex items-center justify-start p-6">
              <img
                src="https://placehold.co/600x400"
                alt="Sneakers"
                className="rounded-lg "
              />
            </div>

            <div className=" p-6 space-y-4">
              <h1 className="text-blue-500 uppercase text-sm font-bold tracking-wide">
                Category Name
              </h1>

              {/* title */}
              <h2 className="text-2xl font-bold text-gray-800">
                {product.title}
              </h2>

              {/* body */}
              <p className="text-gray-600">{product.body}</p>
              <p className="text-gray-600">{product.body + product.body}</p>
              <p className="text-gray-600">{product.body}</p>

              {/* price */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-green-600">
                  $ {(Math.random() * 1000).toFixed(2)}
                </span>
                <span className="text-sm line-through text-rose-400">
                  $ {(Math.random() * 2000).toFixed(2)}{" "}
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                  50% OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* comments */}
        <Suspense fallback={<BaseLoading />}>
          <ProductComments />
        </Suspense>
      </div>
    );
  else return <div>Loading...</div>;
}
