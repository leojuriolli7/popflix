import styled from "styled-components";

export const MediaOverviewSkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  margin: 10px 40px 20px 40px;

  @media (max-width: 985px) {
    margin: 10px 15px 30px 15px;
  }
`;

export const MediaOverviewTextSkeleton = styled.div`
  width: 80%;
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
`;
