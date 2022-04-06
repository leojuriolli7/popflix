import styled from "styled-components";

export const PopoverTitle = styled.h3`
  color: ${(props) => props.theme.colors.sectionText};
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
`;

export const OpenPopoverText = styled.p`
  text-decoration: underline;
  margin: 0 0.5rem;
  font-size: 1.1rem;

  @media (max-width: 845px) {
    font-size: 1.3rem;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const ProductionCompaniesContainer = styled.div`
  text-align: center;
`;

export const ProductionCompanyName = styled.p`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.sectionText};
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;

  @media (max-width: 985px) {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;
