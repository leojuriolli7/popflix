import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { ThemeSwitch } from "../ThemeSwitch";
import * as S from "./styles";

export function HamburguerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const history = useLocation();
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <S.MenuToggle onClick={() => handleShow()}>
        <S.MenuToggleBar />
        <S.MenuToggleBar />
        <S.MenuToggleBar />
      </S.MenuToggle>

      <Offcanvas show={show} onHide={handleClose} placement="end" theme={theme}>
        <Offcanvas.Header>
          <S.HeaderContainer>
            {theme === "light" ? (
              <S.CloseButtonLight onClick={() => setShow(false)} />
            ) : (
              <S.CloseButtonDark onClick={() => setShow(false)} />
            )}
          </S.HeaderContainer>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.Content>
            <S.Navigation>
              <S.UnorganizedList>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/")}
                    isSelected={history.pathname === "/"}
                  >
                    {t("home")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/movies")}
                    isSelected={history.pathname === "/movies"}
                  >
                    {t("movies")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/shows")}
                    isSelected={history.pathname === "/shows"}
                  >
                    {t("tvShows")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/search")}
                    isSelected={history.pathname === "/search"}
                  >
                    {t("search")}
                  </S.MenuOption>
                </S.ListItem>
              </S.UnorganizedList>
            </S.Navigation>
            <S.ThemeSwitchContainer>
              <ThemeSwitch
                height={35}
                width={90}
                handleDiameter={40}
                checkedIcon={<S.DarkModeIcon />}
                uncheckedIcon={<S.LightModeIcon />}
              />
            </S.ThemeSwitchContainer>
          </S.Content>
        </Offcanvas.Body>
      </Offcanvas>
    </S.Container>
  );
}
