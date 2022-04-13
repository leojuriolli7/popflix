import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { SignupForm } from "../Forms/SignupForm";
import Glasses from "../../assets/animations/clapperboard.svg";
import Oscar from "../../assets/animations/oscar.svg";
import { DetailsError } from "../Details/DetailsError";

export function Signup() {
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
            <S.Animation src={Glasses} />
          </S.AnimationContainer>
          <S.SignupTitle>{t("signup")}</S.SignupTitle>
          <SignupForm />
          <S.LoginLink onClick={() => navigate("/login")}>
            {t("loginMessage")}
          </S.LoginLink>
          <S.OscarContainer>
            <S.Oscar src={Oscar} />
          </S.OscarContainer>
        </S.Content>
      )}
    </S.Container>
  );
}
