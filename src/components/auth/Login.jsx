import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import BaseInputErrors from "../base/BaseInputErrors";

export default function () {
  // navigator
  let navigate = useNavigate();

  //   validation
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // state

  function onSubmit(data) {
    // user
    const user = JSON.parse(localStorage.getItem("user"));

    // Check whether the user exists or not.
    if (user && user.email === data.email && user.password === data.password) {
      navigate("/dashboard");
    } else {
      setError("root", {
        type: "unMatch",
        message: "Email or password is wrong",
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-y-4">
      <form
        className="flex flex-col items-center justify-center gap-y-8 p-16 bg-white rounded-xl w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.root && <BaseInputErrors error={errors.root.message} />}

        {/* email */}
        <div className="w-full">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {/* show error */}
          {errors.email && <BaseInputErrors error={errors.email.message} />}
        </div>

        {/* password */}
        <div className="w-full">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password ..."
            className="input"
            {...register("password", { required: true })}
          />
          {/* show errors */}
          {errors.password && (
            <BaseInputErrors error="This field is required" />
          )}
        </div>

        {/* button */}
        <div className="w-full">
          <button className="button ">Loin</button>
        </div>
      </form>
      <Link to="/auth/register">Register</Link>
    </div>
  );
}
