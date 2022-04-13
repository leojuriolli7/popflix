import * as Yup from "yup";
import {
  emailRegex,
  firstNameRegex,
  lastNameRegex,
} from "../../utils/constants";
import { useTranslation } from "react-i18next";

export const SignupSchema = () => {
  const { t }: { t: any } = useTranslation();

  return Yup.object().shape({
    email: Yup.string()
      .required(t("required"))
      .matches(emailRegex, { message: t("emailInvalid") }),
    password: Yup.string()
      .required(t("required"))
      .min(5, t("passwordMinErrorMessage"))
      .max(30, t("passwordMaxErrorMessage")),
    firstName: Yup.string()
      .required(t("required"))
      .matches(firstNameRegex, { message: t("nameRegexError") })
      .min(3, t("firstNameMinErrorMessage"))
      .max(25, t("firstNameMaxErrorMessage")),
    lastName: Yup.string()
      .required(t("required"))
      .matches(lastNameRegex, { message: t("nameRegexError") })
      .min(3, t("lastNameMinErrorMessage"))
      .max(40, t("lastNameMaxErrorMessage")),
    passwordConfirm: Yup.string()
      .required(t("required"))
      .oneOf([Yup.ref("password"), null], t("passwordsDontMatchMessage")),
  });
};
