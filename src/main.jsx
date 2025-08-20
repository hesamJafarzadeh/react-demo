import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// sytle
import "./index.css";

// contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";

// routes
import ClientRoutes from "./routes/ClientRoutes.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      {/* clietn */}
      <ClientRoutes />

      {/* auth */}
      <AuthRoutes />

      {/* admin */}
      <AdminRoutes />
    </AuthProvider>
  </BrowserRouter>
);
