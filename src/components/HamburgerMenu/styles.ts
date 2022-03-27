import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export const Container = styled.div``;

export const MenuToggle = styled.div.attrs({
  className: "Menu",
})`
  width: 40px;
  height: 30px;
`;

export const MenuToggleBar = styled.div`
  background-color: ${(props) => props.theme.colors.text};
  height: 5px;
  width: 100%;
  margin: 5px auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CloseButtonLight = styled(BsXLg).attrs({
  size: 30,
  color: "black",
})`
  margin: 0.5rem 0.5rem 0 0;
`;

export const CloseButtonDark = styled(BsXLg).attrs({
  size: 30,
  color: "white",
})`
  margin: 0.5rem 0.5rem 0 0;
`;

export const Content = styled.div``;

export const Navigation = styled.nav``;

export const UnorganizedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;

export const ListItem = styled.li``;

interface MenuOptionProps {
  isSelected: boolean;
}

export const MenuOption = styled.p<MenuOptionProps>`
  font-size: 3rem;
  font-weight: ${(props) => (props.isSelected ? "bold" : "400")};
  color: ${(props) => props.theme.colors.sectionText};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  button {
    font-size: 2rem;
    padding: 14px 35px;
    border-radius: 40px;
  }
`;

export const ThemeSwitchContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkModeIcon = styled(MdDarkMode).attrs({
  size: 40,
  color: "black",
})`
  margin: 0 0 2px 1px;
`;

export const LightModeIcon = styled(FaSun).attrs({
  size: 36,
  color: "#DF2935",
})`
  margin: 1px 0 1px 2px;
`;
