import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 23px;
  background: transparent;

  @media (max-width: 1150px) {
    margin: 0 2rem 0 2rem;
  }

  @media (max-width: 845px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 426px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0;
  margin: 2.2rem 30px 0 30px;
  line-height: 45px;
  color: ${(props) => props.theme.colors.sectionText};
  padding-bottom: 2rem;
  text-align: center;
`;

export const Link = styled.a`
  font-size: 1.4rem;
  margin-bottom: 0;
  margin: 20px 30px 0 30px;
  color: ${(props) => props.theme.colors.sectionText};
  text-align: center;
`;
