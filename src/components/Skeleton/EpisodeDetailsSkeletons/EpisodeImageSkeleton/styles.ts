import styled from "styled-components";

export const EpisodeImageSkeleton = styled.img`
  width: 100%;
  object-fit: cover;
  height: clamp(225px, 50vw, 500px);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

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
