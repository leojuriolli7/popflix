import styled from "styled-components";
import { BsXLg } from "react-icons/bs";

export const Container = styled.div`
  .offcanvas {
    background-color: green !important;
  }
`;

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

export const CloseButton = styled(BsXLg).attrs({
  size: 20,
  color: "black",
})``;
