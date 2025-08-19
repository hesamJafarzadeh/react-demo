// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// sytle
import "./index.css";

// components
import App from "./App.jsx";

// auth
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

// dashboard
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from "./components/dashboard/Home.jsx";

createRoot(document.getElementById("root")).render(
  //   <StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* prefix and layout */}
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>

    {/* <App /> */}
  </BrowserRouter>
  //   </StrictMode>
);
