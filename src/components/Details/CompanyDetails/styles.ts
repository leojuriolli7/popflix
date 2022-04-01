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
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 23px;
  color: ${(props) => props.theme.colors.sectionText};
  background: ${(props) =>
    props.theme.title === "dark" ? props.theme.colors.primary : "#fff"};

  @media (max-width: 910px) {
    margin: 0 2rem 0 2rem;
  }
`;

export const CompanyLogoAndNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  @media (max-width: 675px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

export const CompanyLogoContainer = styled.div`
  width: 50%;

  @media (max-width: 675px) {
    width: 100%;
  }
`;

export const CompanyLogo = styled.img`
  background: white;
  padding: 1rem;
  width: 100%;
  border-top-left-radius: 23px;
  border-bottom-left-radius: 23px;

  @media (max-width: 675px) {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 23px;
  }
`;

export const CompanyNameContainer = styled.div`
  text-align: center;
  width: 50%;

  @media (max-width: 675px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

export const CompanyName = styled.h1`
  font-size: 2.1rem;
  margin: 0;
`;

export const CompanyInfoContainer = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const CompanyOriginCountry = styled(ParentCompany)``;

export const CompanyHeadquarters = styled(ParentCompany)``;

export const CompanyDescription = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  margin: 10px 40px 20px 40px;

  @media (max-width: 985px) {
    font-size: 1.3rem;
    margin: 10px 15px 30px 15px;
  }
`;

export const CompanyHomepage = styled.a`
  font-size: 1.1rem;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: #3772ff;
  }

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;
