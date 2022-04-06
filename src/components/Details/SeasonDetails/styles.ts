import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

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

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  margin: 0.5rem 1rem 0 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 770px) {
    font-size: 2.5rem;
  }
`;

export const NoEpisodesMessage = styled.h2`
  margin-top: 3rem;
`;

export const ReturnMessage = styled.p`
  margin: 2rem 0 0 0;
  text-decoration: underline;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  margin-top: 1.5rem;
  gap: 1rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  padding: 0 2rem 2rem 2rem;
  border-radius: 23px;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 1150px) {
    margin: 1.5rem 2rem 2rem 2rem;
  }

  @media (max-width: 594px) {
    grid-template-columns: 1fr;
    margin: 1.5rem 1rem 2rem 1rem;
    padding: 0 1rem 2rem 1rem;
  }
`;

export const ArrowBackContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  left: -5px;
  top: -10px;
  background: ${(props) =>
    props.theme.title === "light"
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const WhiteArrowBack = styled(IoMdArrowRoundBack).attrs({
  size: 25,
  color: "white",
})``;

export const EpisodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  text-align: center;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.sectionText};

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;

  @media (max-width: 720px) {
    width: 240px;
    height: 160px;
  }
`;

export const NoPosterContainer = styled.div`
  position: absolute;
  top: 71px;
  left: 121px;

  @media (max-width: 720px) {
    top: 48px;
    left: 92px;
  }
`;

export const NoPosterIcon = styled.img`
  width: 60px;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

export const EpisodeTitle = styled.h2`
  margin: 0;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.sectionText};
  font-size: 1.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 594px) {
    overflow: visible;
    -webkit-line-clamp: 10;
  }
`;

interface EpisodeAirDateProps {
  isReleased: boolean;
}

export const EpisodeAirDate = styled.p<EpisodeAirDateProps>`
  color: ${(props) => !props.isReleased && "#DF2935"};
  margin: 0;
`;
