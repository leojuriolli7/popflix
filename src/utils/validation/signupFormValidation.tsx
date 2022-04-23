import * as Yup from "yup";
import { emailRegex } from "../../utils/constants";
import { useTranslation } from "react-i18next";

export const SignupSchema = () => {
  const { t }: { t: any } = useTranslation();

  const minBirthday = new Date("12-01-1930");

  return Yup.object().shape({
    email: Yup.string()
      .required(t("emailRequired"))
      .matches(emailRegex, { message: t("emailInvalid") }),
    password: Yup.string()
      .required(t("passwordRequired"))
      .min(5, t("passwordMinErrorMessage"))
      .max(30, t("passwordMaxErrorMessage")),
    firstName: Yup.string()
      .required(t("firstNameRequired"))
      .min(3, t("firstNameMinErrorMessage"))
      .max(25, t("firstNameMaxErrorMessage")),
    lastName: Yup.string()
      .required(t("lastNameRequired"))
      .min(3, t("lastNameMinErrorMessage"))
      .max(40, t("lastNameMaxErrorMessage")),
    passwordConfirm: Yup.string()
      .required(t("passwordConfirmRequired"))
      .oneOf([Yup.ref("password"), null], t("passwordsDontMatchMessage")),
    birthday: Yup.date()
      .required(t("birthdayRequired"))
      .min(minBirthday, "Birthdate not allowed"),
  });
};
