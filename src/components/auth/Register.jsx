import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import BaseInputErrors from "../base/BaseInputErrors";
import { registerValidationRules } from "../../validations/authValidations";

export default function () {
  // navigator
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  //   form handler
  function onSubmit({ email, password }) {
    // save the user into localstorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        password,
      })
    );

    // show toast
    toast.success("Registerd successfully");

    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  }
  const notify = () => toast("Successfully Registered!");

  return (
    <div className="flex items-center justify-center flex-col gap-y-4 h-screen w-screen">
      <ToastContainer hideProgressBar={true} />
      <form
        className="flex flex-col items-center justify-center gap-y-8 p-16 bg-white rounded-xl w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* email */}
        <div className="w-full">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            {...register("email", registerValidationRules.email)}
          />
          {/* show error */}
          {errors.email && <BaseInputErrors error={errors.email.message} />}
        </div>

        {/* password */}
        <div className="w-full">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            className="input"
            {...register("password", registerValidationRules.password)}
          />
          {/* show error */}
          {errors.password && (
            <BaseInputErrors error={errors.password.message} />
          )}
        </div>

        {/* password repeat */}
        <div className="w-full">
          <label>Repeat Password</label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            className="input"
            {...register(
              "passwordRepeat",
              registerValidationRules.passwordRepeat(password)
            )}
          />

          {/* show error */}
          {errors.passwordRepeat && (
            <BaseInputErrors error={errors.passwordRepeat.message} />
          )}
        </div>

        {/* button */}
        <div className="w-full">
          <button type="submit" className="button">
            Sign uip
          </button>
        </div>
      </form>
      <Link to="/auth/login">Login</Link>
    </div>
  );
}
