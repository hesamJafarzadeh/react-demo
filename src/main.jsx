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
import Home from "./components/dashboard/Home.jsx";

// views
import ProductsView from "./views/client/ProductsView.jsx";

// layouts
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ClientLayout from "./layouts/ClientLayout.jsx";
import ProductView from "./views/client/ProductView.jsx";

// contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  //   <StrictMode>

  <AuthProvider>
    <BrowserRouter>
      {/* clietn */}
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

      {/* auth */}
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

      {/* admin */}
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      {/* <App /> */}
    </BrowserRouter>
  </AuthProvider>
  //   </StrictMode>
);
