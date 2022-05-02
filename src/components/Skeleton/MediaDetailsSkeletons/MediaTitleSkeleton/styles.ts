import styled from "styled-components";

export const MediaTitleSkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MediaTitleSkeleton = styled.div`
  width: 80%;
  height: 50px;
  margin: 2.2rem 35px 0 35px;
  line-height: 45px;

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

  @media (max-width: 845px) {
    margin: 1.8rem 20px 0 20px;
  }
`;
