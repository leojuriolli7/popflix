import styled from "styled-components";

export const PosterSkeleton = styled.div`
  width: 115px;
  height: 172.5px;
  border-radius: 20px;
  box-shadow: 2px 4px 7px 0px rgb(0 0 0 / 20%);
  margin-bottom: 10px;
  border-radius: 20px;

  @media (max-width: 845px) {
    width: 140px;
    height: 210px;
  }

  @media (max-width: 361px) {
    width: 120px;
    height: 180px;
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
