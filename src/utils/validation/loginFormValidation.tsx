import * as Yup from "yup";
import { emailRegex } from "../constants";
import { useTranslation } from "react-i18next";

export const LoginSchema = () => {
  const { t }: { t: any } = useTranslation();

  return Yup.object().shape({
    email: Yup.string()
      .required(t("emailRequired"))
      .matches(emailRegex, { message: t("emailInvalid") }),
    password: Yup.string()
      .required(t("passwordRequired"))
      .min(5, t("passwordMinErrorMessage"))
      .max(30, t("passwordMaxErrorMessage")),
  });
};
