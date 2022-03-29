import styled from "styled-components";
import { darken } from "polished";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export const Container = styled.header`
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.colors.primary};

  .Menu {
    display: none;

    @media (max-width: 770px) {
      display: block;
    }
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1105px) {
    margin: 0 1.5rem 0 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 160px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Navigation = styled.nav``;

export const UnorganizedList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

interface MenuOptionInterface {
  isSelected: boolean;
}

export const ListItemText = styled.a<MenuOptionInterface>`
  border-bottom: ${(props) => (props.isSelected ? "2px solid white" : "none")};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-size: 1.3rem;
  padding-bottom: 2px;

  &:hover {
    color: ${darken(0.2, "white")};
    border-color: ${darken(0.2, "white")};
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const DarkModeIcon = styled(MdDarkMode).attrs({
  size: 22,
  color: "black",
})`
  margin: 0 0 2px 1px;
`;

export const LightModeIcon = styled(FaSun).attrs({
  size: 20,
  color: "#DF2935",
})`
  margin: 1px 0px 3px 2px;
`;
