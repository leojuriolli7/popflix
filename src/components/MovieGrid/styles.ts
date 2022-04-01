import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;

  @media (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  @media (max-width: 1310px) {
    margin: 0 10px 0 10px;
  }
`;
