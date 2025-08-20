import { useEffect } from "react";
import { useForm } from "react-hook-form";
import BaseInputErrors from "../base/BaseInputErrors";
import { loginValidationRules } from "../../validations/authValidations";

export default function ({ formHasError, onSubmitForm }) {
  //   validation
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (formHasError) {
      setError("root", {
        type: "unMatch",
        message: "Email or password is wrong",
      });
    }
  }, [formHasError]);

  function handleSubmitForm(data) {
    onSubmitForm(data);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        className="flex flex-col items-center justify-center gap-y-4 p-16 bg-white rounded-xl w-[500px]"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {errors.root && <BaseInputErrors error={errors.root.message} />}

        {/* email */}
        <div className="w-full">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            {...register("email", loginValidationRules.email)}
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
            {...register("password", loginValidationRules.password)}
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
    </div>
  );
}
