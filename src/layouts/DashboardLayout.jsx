import { Outlet, Navigate, useNavigate } from "react-router";
import { createContext } from "react";

export const UserContext = createContext(null);

export default function () {
  console.log("in dashboard layout");
  const navigate = useNavigate();

  // user
  const user = JSON.parse(localStorage.getItem("user"));

  // Check whether the user exists or not.
  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/auth/login" replace />;
  }

  //   logout user
  function logout() {
    localStorage.removeItem("user");

    navigate("/auth/login");
  }

  return (
    <UserContext.Provider value={user}>
      <div className="w-full h-full  ">
        <div className="w-full text-white  bg-blue-500 flex justify-between p-8">
          <div>{user.email}</div>
          <div>
            <button className="button bg-rose-500" onClick={logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
}
