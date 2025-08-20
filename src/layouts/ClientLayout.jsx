import { Outlet } from "react-router";
import Header from "../components/layouts/client/Header";
function ClientLayout() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-4">
        <Outlet />
      </div>
    </>
  );
}

export default ClientLayout;
