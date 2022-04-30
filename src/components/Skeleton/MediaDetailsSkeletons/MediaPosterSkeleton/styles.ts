import styled from "styled-components";

export const PosterSkeleton = styled.div`
  width: clamp(10rem, 37vw, 42%);
  object-fit: cover;
  height: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 845px) {
    height: 400px;
    width: 100%;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0px;
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
