import { isPasswordValid, validate } from "../utils/validate";

export class AuthValidator {
  constructor() {}

  registerValidation = validate({
    name: {
      notEmpty: {
        errorMessage: "Please provide a name of organizatoin",
      },
      isString: { errorMessage: "organization name must be a string" },
      trim: true,
    },
    email: {
      notEmpty: {
        errorMessage: "Please provide an email",
      },
      isString: { errorMessage: "email must be a string" },
      isEmail: { errorMessage: "please enter a valid email" },
      trim: true,
      toLowerCase: true,
    },
    password: {
      notEmpty: {
        errorMessage: "Please provide a password",
      },
      isString: { errorMessage: "password must be a string" },
      trim: true,
      custom: {
        options: async (password: string) => {
          const validationErrors = isPasswordValid(password);
          if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(", "));
          }
        },
      },
    },
    phone: {
      notEmpty: {
        errorMessage: "Please provide a phone number",
      },
      trim: true,
      isMobilePhone: { options: ["en-NG"] },
    },
  });

  loginValidation = validate({
    staffId: {
      notEmpty: {
        errorMessage: "Please provide staffId",
      },
      isString: { errorMessage: "staffId must be a string" },
      trim: true,
      toLowerCase: true,
    },
    password: {
      notEmpty: {
        errorMessage: "Please provide a password",
      },
      isString: { errorMessage: "password must be a string" },
      trim: true,
    },
  });

  onSelectAcccountValidation = validate({
    email: {
      notEmpty: {
        errorMessage: "Please provide an email",
      },
      isString: { errorMessage: "email must be a string" },
      isEmail: { errorMessage: "please enter a valid email" },
      trim: true,
      toLowerCase: true,
    },
    organizationId: {
      notEmpty: {
        errorMessage: "Please provide an organization Id",
      },
      isNumeric: { errorMessage: "organizationId must be a number" },
      trim: true,
    },
  });

  otpVerificationValidation = validate({
    otp: {
      notEmpty: {
        errorMessage: "Please provide otp",
      },
      isLength: {
        options: { max: 6, min: 6 },
        errorMessage: "OTP must be 6 digits long",
      },
      isString: { errorMessage: "Otp must be a string" },
      trim: true,
    },
    email: {
      notEmpty: {
        errorMessage: "Please provide an email",
      },
      isString: { errorMessage: "email must be a string" },
      isEmail: { errorMessage: "please enter a valid email" },
      trim: true,
      toLowerCase: true,
    },
  });
}
