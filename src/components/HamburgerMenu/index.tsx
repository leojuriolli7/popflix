import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { Button } from "../Button";
import { ThemeSwitch } from "../ThemeSwitch";
import * as S from "./styles";

export function HamburguerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const history = useLocation();

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
                    Home
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/movies")}
                    isSelected={history.pathname === "/movies"}
                  >
                    Movies
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/shows")}
                    isSelected={history.pathname === "/shows"}
                  >
                    Shows
                  </S.MenuOption>
                </S.ListItem>
              </S.UnorganizedList>
            </S.Navigation>
            <S.ButtonContainer>
              <Button
                type="button"
                color="#fdca40"
                textColor="white"
                borderColor="#fdca40"
                text="Log In"
              />
              <Button
                type="button"
                color="#3772ff"
                textColor="white"
                borderColor="#3772ff"
                text="Sign Up"
              />
            </S.ButtonContainer>
            <S.ThemeSwitchContainer>
              <ThemeSwitch
                height={35}
                width={100}
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
