import { Outlet, Link } from "react-router";

export default function () {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-y-4">
        <Outlet />

        <Link className="text-blue-500 mx-2" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
