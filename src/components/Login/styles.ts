import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  min-height: 80vh;
  margin: 2rem 0 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 715px) {
    margin-top: 1rem;
  }

  button {
    padding: 12px 24px;
    margin-top: 2rem;
    font-size: 1.2rem;
    transition: 0.1s;
  }
`;

export const Content = styled.div.attrs({
  className: "animate__animated animate__zoomIn",
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  color: ${(props) => props.theme.colors.sectionText};
  box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.3);
  padding: 4rem 4rem 3rem 4rem;
  width: 92vw;
  max-width: 528px;

  @media (max-width: 420px) {
    padding: 3rem 2rem;
  }

  form {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 4rem;
  margin: 0 0 3rem 0;
  text-align: center;
`;

export const SignUpLink = styled.p`
  text-decoration: underline;
  font-size: 1.1rem;
  margin: 0;
  margin-top: 2rem;
  text-align: center;

  &:hover {
    color: #3772ff;
    cursor: pointer;
  }

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }
`;

export const AnimationContainer = styled.div.attrs({
  className: "animate__animated animate__fadeInBottomLeft",
})`
  position: absolute;
  top: -25px;
  left: -15px;
  z-index: 2;

  @media (max-width: 320px) {
    top: -40px;
  }
`;

export const Animation = styled.img`
  width: 136px;

  @media (max-width: 625px) {
    width: 120px;
  }

  @media (max-width: 441px) {
    width: 100px;
  }

  @media (max-width: 350px) {
    width: 90px;
  }

  animation: shake-animation 3s ease infinite;
  animation-delay: 2s;
  transform-origin: 50% 50%;

  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(14px, -7px);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(14px, -7px);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(14px, -7px);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
