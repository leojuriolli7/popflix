import styled from "styled-components";

export const MediaRatingSkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;

  span {
    color: ${(props) => props.theme.colors.skeleton2};
  }

  @media (max-width: 845px) {
    margin-top: 1rem;
  }
`;

export const MediaRatingTextSkeleton = styled.div`
  width: 75px;
  height: 25px;
  margin-left: 0.5rem;

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
