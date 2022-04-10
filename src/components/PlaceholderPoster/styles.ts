import styled from "styled-components";

export const MediaPosterContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(225px + 15%);
  height: calc(337.5px + 15%);
  transition: 0.3s;
  border-radius: 23px;
  margin-bottom: 1.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media (max-width: 590px) {
    width: 191.25px;
    height: 286.87px;
  }

  @media (max-width: 420px) {
    width: calc(191.25px - 15%);
    height: calc(286.87px - 15%);
  }

  @media (max-width: 360px) {
    width: 225px;
    height: 337.5px;
  }
`;

export const MediaPoster = styled.img`
  border-radius: 23px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const MediaNameContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 25px;
  width: 80%;
  text-align: center;

  @media (max-width: 590px) {
    left: 17px;
  }

  @media (max-width: 360px) {
    left: 22px;
  }
`;

export const MediaName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 140px;
  left: 28px;
  width: 80%;
  text-align: center;

  @media (max-width: 590px) {
    bottom: 94px;
    left: 17px;
  }

  @media (max-width: 360px) {
    bottom: 120px;
    left: 21px;
  }
`;

export const Icon = styled.img`
  width: 60%;
`;
