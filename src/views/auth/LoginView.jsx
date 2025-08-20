import { Link, useNavigate } from "react-router";
import LoginForm from "../../components/auth/LoginForm";
import { useState } from "react";

export default function () {
  // state
  const [formHasError, setFormHasError] = useState(null);

  // navigator
  let navigate = useNavigate();

  function validateUserLogin({ email, password }) {
    // Check whether the user exists or not.
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
  }

  function handleLogin(data) {
    if (validateUserLogin(data)) {
      navigate("/dashboard");
    } else {
      setFormHasError(true);
    }
  }

  return (
    <>
      {/* form */}
      <LoginForm onSubmitForm={handleLogin} formHasError={formHasError} />

      <span className="flex gap-x-2 justify-center">
        <span> You have not an account ?</span>
        <Link to="/auth/register" className="text-blue-500">
          Register
        </Link>
      </span>
    </>
  );
}
