import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Enter an email/username"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter a password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Your passwords must match",
  ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Enter an email/username"),
  password: Yup.string().required("Enter a password"),
});
