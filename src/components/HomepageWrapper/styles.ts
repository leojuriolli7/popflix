import styled from "styled-components";

export const PageWrapper = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  padding-top: 3rem;

  @media (max-width: 1080px) {
    padding-top: 1rem;
  }
`;
