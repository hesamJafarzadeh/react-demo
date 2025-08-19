import { Outlet } from "react-router";

export default function () {
  return (
    <div className="w-full h-full bg-gray-100">
      <Outlet />
    </div>
  );
}
