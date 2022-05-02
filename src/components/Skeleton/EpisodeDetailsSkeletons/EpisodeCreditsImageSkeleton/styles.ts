import styled from "styled-components";

export const EpisodeCreditsImageSkeleton = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 20px;

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

  @media (max-width: 500px) {
    height: 270px;
    width: 180px;
  }
`;
