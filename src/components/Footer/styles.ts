import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { darken } from "polished";

export const Container = styled.footer`
  box-shadow: ${(props) =>
    props.theme.title === "light"
      ? "1px 5px 15px 5px rgba(0, 0, 0, 0.1)"
      : "1px -1px 22px 17px rgba(0, 0, 0, 0.65)"};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem 2rem 1rem 2rem;
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  margin: 0;
`;

export const BackToTopButton = styled(BsFillArrowUpCircleFill).attrs({
  size: 30,
})`
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
    background: ${darken(0.5, "white")};
  }
`;
