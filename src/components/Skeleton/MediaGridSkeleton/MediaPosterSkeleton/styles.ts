import styled from "styled-components";

export const MediaPosterSkeleton = styled.div`
  position: relative;
  margin: 0 auto;
  width: 258.75px;
  height: 388.125px;
  transition: 0.3s;
  border-radius: 23px;
  margin-bottom: 1.5rem;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 590px) {
    width: 191.25px;
    height: 286.87px;
  }

  @media (max-width: 420px) {
    width: 162.5625px;
    height: 243.8395px;
  }

  @media (max-width: 360px) {
    width: 225px;
    height: 337.5px;
  }

  background-image: ${(props) =>
    `linear-gradient(-90deg, ${props.theme.colors.skeleton1} 0%,  ${props.theme.colors.skeleton2} 50%,  ${props.theme.colors.skeleton1} 100%)`};

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;
