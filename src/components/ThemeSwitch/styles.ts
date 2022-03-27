import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

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
  margin: 0px 0 2px 2px;
`;
