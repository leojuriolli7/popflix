import { Formik, Field, Form, FormikValues } from "formik";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { InputValidationMessage } from "../../../components/InputValidationMessage";
import { setUser } from "../../../store/User.store";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { PasswordEye } from "../../../components/PasswordEye";
import { useMutation } from "react-query";
import { userLogin } from "../../../utils/requests";
import toast from "react-hot-toast";
import { LoginSchema } from "../../../utils/validation/loginFormValidation";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { mutate } = useMutation(userLogin, {
    onSuccess: (data) => {
      dispatch(setUser(data));
      navigate("/");
    },
    onError: () => {
      toast.error(t("toastErrorMessage"));
    },
  });

  const handleSubmit = (values: FormikValues, actions: any) => {
    actions.setSubmitting(true);
    mutate(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema()}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <S.FieldContainer>
            <S.InputLabel htmlFor="email">{t("email")}</S.InputLabel>
            <Field
              id="email"
              name="email"
              placeholder={t("emailInputPlaceholderLogin")}
              type="email"
              data-cy="email-input"
            />
            {touched.email && errors.email && (
              <InputValidationMessage text={errors.email} />
            )}
          </S.FieldContainer>

          <S.FieldContainer>
            <S.InputLabel htmlFor="password">{t("password")}</S.InputLabel>
            <Field
              id="password"
              name="password"
              placeholder={t("passwordInputPlaceholderLogin")}
              type={passwordVisible === true ? "text" : "password"}
              data-cy="password-input"
            />
            <PasswordEye
              passwordVisible={passwordVisible}
              setPasswordVisible={setPasswordVisible}
            />
            {touched.password && errors.password && (
              <InputValidationMessage text={errors.password} />
            )}
          </S.FieldContainer>

          <Button
            color="#df2935"
            textColor="white"
            borderColor="#df2935"
            type="submit"
            disabled={isSubmitting}
            dataCy="login-button"
            text={
              isSubmitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                t("submit")
              )
            }
          />
        </Form>
      )}
    </Formik>
  );
};
