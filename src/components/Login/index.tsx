import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { LoginForm } from "../Forms/LoginForm";
import { DetailsError } from "../Details/DetailsError";
import Popcorn from "../../assets/animations/popcorn1.svg";

export function Login() {
  const { t }: { t: any } = useTranslation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const navigate = useNavigate();

  return (
    <S.Container>
      {isUserLogged ? (
        <DetailsError text={t("alreadyLoggedInMessage")} />
      ) : (
        <S.Content>
          <S.AnimationContainer>
            <S.Animation src={Popcorn} />
          </S.AnimationContainer>
          <S.LoginTitle>{t("login")}</S.LoginTitle>
          <LoginForm />
          <S.SignUpLink onClick={() => navigate("/signup")}>
            {t("signUpMessage")}
          </S.SignUpLink>
        </S.Content>
      )}
    </S.Container>
  );
}
