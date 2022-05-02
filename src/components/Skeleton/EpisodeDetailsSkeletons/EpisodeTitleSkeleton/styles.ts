import styled from "styled-components";

export const EpisodeTitleSkeleton = styled.div`
  width: 80%;
  height: 45px;
  margin: 2.2rem 35px 0 35px;

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

  @media (max-width: 485px) {
    margin: 1rem 35px 0 35px;
  }
`;
