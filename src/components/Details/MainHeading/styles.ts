import styled from "styled-components";

export const MainHeadingContainer = styled.div`
  color: ${(props) => props.theme.colors.sectionText};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainHeading = styled.h1`
  text-align: center;
  margin: 0;

  @media (max-width: 655px) {
    font-size: 2.5rem;
    margin: 0 20px 0 20px;
  }
`;

export const MainHeadingSubText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px 20px 0 20px;
`;
