import { useContext } from "react";
import { UserContext } from "../../layouts/DashboardLayout";

export default function () {
  const user = useContext(UserContext);

  console.log("USER", user);

  return <div className="py-12 text-4xl font-bold">Dashboard</div>;
}
