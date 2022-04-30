import styled from "styled-components";

export const MediaPosterSkeleton = styled.div`
  position: relative;
  width: clamp(7rem, 18.5vw, 218.76px);
  height: clamp(11rem, 27.75vw, 328.14px);
  border-radius: 20px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);

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
