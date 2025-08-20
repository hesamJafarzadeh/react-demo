import { Routes, Route } from "react-router";
// layout
import DashboardLayout from "../layouts/DashboardLayout";

// pages
import Home from "../components/dashboard/Home";

export default function () {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
