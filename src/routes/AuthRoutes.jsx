import { Routes, Route } from "react-router";
// layout
import AuthLayout from "../layouts/AuthLayout";

// pages
import LoginView from "../views/auth/LoginView";
import RegisterView from "../views/auth/RegisterView";

export default function () {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<LoginView />} />
        <Route index path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />
      </Route>
    </Routes>
  );
}
