import styled from "styled-components";

export const MediaPosterSkeleton = styled.div`
  position: relative;
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

  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );

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
