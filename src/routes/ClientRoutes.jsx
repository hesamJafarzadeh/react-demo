import { Routes, Route } from "react-router";
// layout
import ClientLayout from "../layouts/ClientLayout";

// pages
import App from "./../App";
import ProductsView from "../views/client/ProductsView";
import ProductView from "../views/client/ProductView";

export default function () {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<App />} />

        {/* with prefix */}
        <Route path="products">
          <Route index element={<ProductsView />}></Route>
          <Route path=":id" element={<ProductView />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}
