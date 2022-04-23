import styled from "styled-components";

export const EpisodeImageSkeleton = styled.img`
  width: 100%;
  object-fit: cover;
  height: 500px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

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
