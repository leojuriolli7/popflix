import * as S from "./styles";
import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import logoWhite from "../../assets/logo-white.svg";
import logoDark from "../../assets/logo-dark.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { HamburguerMenu } from "../HamburgerMenu";
import { ThemeSwitch } from "../ThemeSwitch";
import { useTranslation } from "react-i18next";
import { LanguageMenu } from "../LanguageMenu";
import { UserPopover } from "../UserPopover";

export function Header() {
  const navigate = useNavigate();
  const history = useLocation();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { t }: { t: any } = useTranslation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);

  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.Logo
            title={t("goHome")}
            src={theme === "dark" ? logoDark : logoWhite}
            onClick={() => navigate("/")}
          />
        </S.LogoContainer>
        <S.Navigation>
          <HamburguerMenu />
          <S.UnorganizedList>
            <S.ListItem>
              <S.ListItemText
                onClick={() => navigate("/")}
                isSelected={history.pathname === "/"}
              >
                {t("home")}
              </S.ListItemText>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemText
                onClick={() => navigate("/movies")}
                isSelected={history.pathname === "/movies"}
              >
                {t("movies")}
              </S.ListItemText>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemText
                onClick={() => navigate("/shows")}
                isSelected={history.pathname === "/shows"}
              >
                {t("tvShows")}
              </S.ListItemText>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemText
                onClick={() => navigate("/search")}
                isSelected={history.pathname === "/search"}
              >
                {t("search")}
              </S.ListItemText>
            </S.ListItem>
          </S.UnorganizedList>
        </S.Navigation>
        <S.OptionsContainer>
          {isUserLogged && <UserPopover />}
          <LanguageMenu />
          <ThemeSwitch
            height={15}
            width={40}
            handleDiameter={23}
            uncheckedIcon={<S.LightModeIcon />}
            checkedIcon={<S.DarkModeIcon />}
          />
        </S.OptionsContainer>
      </S.Content>
    </S.Container>
  );
}
