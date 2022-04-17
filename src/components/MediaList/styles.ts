import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;

  .alice-carousel {
    position: relative;
    margin-top: 5px;

    li {
      padding: 1rem 0 1rem 0;
    }
  }

  .alice-carousel__prev-btn-item {
    position: absolute;
    left: -15px;
    top: 160px;
    font-size: 30px;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => `2px solid ${props.theme.colors.primary}`};

    &:hover {
      background: ${darken(0.1, "white")};
    }

    span {
      transition: 0.3s;
      color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 1200px) {
      top: 170px;
      left: -10px;
    }

    @media (max-width: 426px) {
      display: none;
    }
  }

  .alice-carousel__next-btn-item {
    position: absolute;
    right: -15px;
    top: 160px;
    font-size: 30px;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => `2px solid ${props.theme.colors.primary}`};

    &:hover {
      background: ${darken(0.1, "white")};
    }

    span {
      transition: 0.3s;
      color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 1200px) {
      top: 170px;
      right: -10px;
    }

    @media (max-width: 426px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  @media (max-width: 1310px) {
    margin: 0 10px 0 10px;
  }
`;

export const SectionTitle = styled.h1`
  color: ${(props) => props.theme.colors.sectionText};
  font-size: 2.2rem;

  @media (max-width: 370px) {
    font-size: 2rem;
    margin-bottom: 0;
  }

  @media (max-width: 375px) {
    font-size: 1.9rem;
    margin-bottom: 0;
  }

  @media (max-width: 353px) {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

export const MediaPosterContainer = styled.div`
  position: relative;
  transition: 0.3s;
  width: clamp(7rem, 18.5vw, 218.76px);
  height: clamp(11rem, 27.75vw, 328.14px);

  @media (max-width: 1035px) {
    min-width: 22vw;
    min-height: 33vw;
  }

  @media (max-width: 835px) {
    min-width: 29vw;
    min-height: 43.5vw;
  }

  @media (max-width: 580px) {
    min-width: 42vw;
    min-height: 63vw;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const MediaPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
  box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 50%);
  border-radius: 20px;
`;

export const MediaNameContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 80%;
  text-align: center;
`;

export const MediaName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 22px;
  width: 80%;
  text-align: center;
`;

export const Icon = styled.img`
  width: 60%;
`;
