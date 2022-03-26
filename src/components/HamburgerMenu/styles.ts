import styled from "styled-components";

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
  margin: 6px auto;
`;
