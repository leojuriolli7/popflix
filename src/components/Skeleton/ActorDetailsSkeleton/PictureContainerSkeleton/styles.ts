import styled from "styled-components";

export const PictureContainerSkeleton = styled.div`
  width: clamp(8rem, 50%, 31rem);
  height: 600px;

  border-top-left-radius: 23px;
  border-bottom-left-radius: 23px;

  @media (max-width: 690px) {
    width: 100%;
    height: 400px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 23px;
  }

  ${(props) =>
    props.theme.title === "light" &&
    `background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );`}

  ${(props) =>
    props.theme.title === "dark" &&
    `background-image: linear-gradient(
    -90deg,
    #252525 0%,
    #303030 50%,
    #252525 100%
  );`}

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
