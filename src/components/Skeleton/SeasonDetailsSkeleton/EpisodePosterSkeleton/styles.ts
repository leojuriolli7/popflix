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
