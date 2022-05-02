import styled from "styled-components";

export const PosterSkeleton = styled.div`
  width: clamp(10rem, 37vw, 42%);
  object-fit: cover;
  height: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 845px) {
    height: 800px;
    width: 100%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
  }

  @media (max-width: 560px) {
    height: 700px;
  }

  @media (max-width: 475px) {
    height: 600px;
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
