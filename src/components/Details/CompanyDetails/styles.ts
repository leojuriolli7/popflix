import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 80vh;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  border-radius: 23px;
  color: ${(props) => props.theme.colors.sectionText};

  @media (max-width: 910px) {
    margin: 0 2rem 0 2rem;
  }

  @media (max-width: 430px) {
    margin: 0 1rem 0 1rem;
  }
`;

export const CompanyLogoAndNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyLogoContainer = styled.div`
  width: 300px;
`;

export const CompanyLogo = styled.img`
  background: white;
  padding: 1rem;
  width: 100%;
  border-radius: 23px;
`;

export const CompanyNameContainer = styled.div``;

export const CompanyName = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 0 10px 0 10px;
`;

export const CompanyInfoContainer = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`;

export const ParentCompanyAndOriginCountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ParentCompany = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-left: 8px;
  margin-right: 8px;

  @media (max-width: 985px) {
    font-size: 1.4rem;
  }
`;

export const ParentCompanySpan = styled.span`
  font-size: 1.2rem;
  margin: 0;
  text-decoration: underline;

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }
`;

export const CompanyOriginCountry = styled(ParentCompany)``;

export const CompanyHeadquarters = styled(ParentCompany)``;

export const CompanyDescription = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  margin: 0 40px 0 40px;

  @media (max-width: 985px) {
    font-size: 1.3rem;
  }

  @media (max-width: 415px) {
    margin: 0 20px 0 20px;
  }
`;

export const CompanyHomepage = styled.a`
  font-size: 1.1rem;
  text-decoration: underline;
  margin: 0 8px 0 8px;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }

  @media (max-width: 985px) {
    font-size: 1.4rem;
  }
`;
