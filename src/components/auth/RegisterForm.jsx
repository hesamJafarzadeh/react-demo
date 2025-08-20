import { Link } from "react-router";
import { useForm } from "react-hook-form";

import BaseInputErrors from "../base/BaseInputErrors";
import { registerValidationRules } from "../../validations/authValidations";

export default function ({ onSubmitForm }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  //   form handler
  function onSubmit(data) {
    onSubmitForm(data);
  }

  return (
    <form
      className="flex flex-col items-center justify-center gap-y-4 p-16 bg-white rounded-xl w-[500px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* name */}
      <div className="w-full">
        <label>Name</label>
        <input
          type="text"
          placeholder="Your First name ..."
          className="input"
          {...register("name", registerValidationRules.name)}
        />
        {/* show error */}
        {errors.name && <BaseInputErrors error={errors.name.message} />}
      </div>

      {/* family */}
      <div className="w-full">
        <label>Family</label>
        <input
          type="text"
          placeholder="Your Last name ..."
          className="input"
          {...register("family", registerValidationRules.family)}
        />
        {/* show error */}
        {errors.family && <BaseInputErrors error={errors.family.message} />}
      </div>

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
        {errors.password && <BaseInputErrors error={errors.password.message} />}
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
  );
}
