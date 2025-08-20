import { validationMessages } from "./customValidationMessages";
import { validationRules } from "./customValidationRules";

export const loginValidationRules = {
  email: {
    required: validationMessages.required,
    pattern: {
      value: validationRules.email,
      message: validationMessages.invalidFormat,
    },
  },
  password: { required: validationMessages.required },
};

export const registerValidationRules = {
  ...loginValidationRules,
  name: {
    required: validationMessages.required,
  },
  family: {
    required: validationMessages.required,
  },
  passwordRepeat: (password) => ({
    required: validationMessages.required,
    validate: (value) =>
      value === password || validationMessages.mustMathPassword,
  }),
};
