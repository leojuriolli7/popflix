import styled from "styled-components";

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
