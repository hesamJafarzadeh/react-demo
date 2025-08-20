import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterView() {
  const navigate = useNavigate();

  function saveUser({ email, password, name, family }) {
    // save the user into localstorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        password,
        name,
        family,
      })
    );
  }

  function handleRegister(data) {
    saveUser(data);
    // show toast
    toast.success("Registerd successfully");
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  }

  return (
    <>
      <ToastContainer hideProgressBar={true} />
      <RegisterForm onSubmitForm={handleRegister} />

      <span className="flex gap-x-2 justify-center">
        <span>Have you registered before ?</span>
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </span>
    </>
  );
}
