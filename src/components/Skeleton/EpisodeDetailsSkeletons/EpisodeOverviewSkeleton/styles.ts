import styled from "styled-components";

export const EpisodeOverviewSkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  margin: 10px 40px 0 40px;

  @media (max-width: 985px) {
    font-size: 1.2rem;
    margin: 10px 15px 0 15px;
  }
`;

export const EpisodeOverviewTextSkeleton = styled.div`
  width: 500px;
  height: 20px;

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

  @media (max-width: 665px) {
    width: 400px;
  }

  @media (max-width: 510px) {
    width: 250px;
  }

  @media (max-width: 335px) {
    width: 200px;
  }
`;
