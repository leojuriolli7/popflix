import styled from "styled-components";

export const EpisodePosterSkeleton = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 720px) {
    width: 240px;
    height: 160px;
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
