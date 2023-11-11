import * as Yup from "yup";
import "yup-phone-lite";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Enter an email/phone number")
    .test("email", "Invalid email/phone number", (value) => {
      return validateEmail(value) || validatePhone(value);
    }),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character.",
    )
    .required("Enter a password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Your passwords must match")
    .required("Re-enter your password"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Enter an email/phone number")
    .test("email", "Invalid email/phone number", (value) => {
      return validateEmail(value) || validatePhone(value);
    }),
  password: Yup.string().required("Enter a password"),
});

const validateEmail = (email: string | undefined) => {
  return Yup.string().email("Invalid email").isValidSync(email);
};

const validatePhone = (phone: string | undefined) => {
  return Yup.string()
    .phone("US", "Enter a valid phone number")
    .isValidSync(phone);
};
