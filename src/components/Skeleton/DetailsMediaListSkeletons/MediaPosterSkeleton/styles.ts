import styled from "styled-components";

export const MediaPosterSkeleton = styled.div`
  position: relative;
  transition: 0.3s;
  border-radius: 20px;
  width: clamp(10rem, 29vw, 187.76px);
  height: clamp(15rem, 44vw, 276.64px);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 1035px) {
    min-width: 22vw;
    min-height: 33vw;
  }

  @media (max-width: 835px) {
    min-width: 30vw;
    min-height: 45vw;
  }

  @media (max-width: 580px) {
    min-width: 42vw;
    min-height: 63vw;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
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
