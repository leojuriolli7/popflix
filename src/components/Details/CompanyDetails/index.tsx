import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import defaultCompanyPoster from "../../../assets/defaultCompanyPoster.png";
import * as S from "./styles";

interface CompanyDetailsInterface {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  origin_country: string;
  name: string;
  parent_company: string;
}

export function CompanyDetails() {
  const { id } = useParams();
  const [companyDetails, setCompanyDetails] =
    useState<CompanyDetailsInterface>();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`company/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9`)
      .then((response) => setCompanyDetails(response.data));
  }, [id]);

  return (
    <S.Container>
      <S.Content>
        <S.CompanyLogoAndNameContainer>
          <S.CompanyLogoContainer>
            <S.CompanyLogo
              src={
                companyDetails?.logo_path
                  ? `https://image.tmdb.org/t/p/w500/${companyDetails?.logo_path}`
                  : defaultCompanyPoster
              }
            />
          </S.CompanyLogoContainer>
          <S.CompanyNameContainer>
            <S.CompanyName>{companyDetails?.name}</S.CompanyName>
          </S.CompanyNameContainer>
        </S.CompanyLogoAndNameContainer>
      </S.Content>
      <S.CompanyInfoContainer>
        <S.ParentCompanyAndOriginCountryContainer>
          <S.CompanyOriginCountry>
            Origin Country: {companyDetails?.origin_country || "Unknown"}
          </S.CompanyOriginCountry>
          {companyDetails?.parent_company && (
            <S.ParentCompany>
              Parent Company: {companyDetails.parent_company}
            </S.ParentCompany>
          )}
        </S.ParentCompanyAndOriginCountryContainer>
        <S.CompanyHeadquarters>
          Headquarters:{companyDetails?.headquarters || "Unknown"}
        </S.CompanyHeadquarters>
        {companyDetails?.description && (
          <S.CompanyDescription>
            {companyDetails?.description}
          </S.CompanyDescription>
        )}
        {companyDetails?.homepage && (
          <S.CompanyHomepage href={companyDetails?.homepage} target="_blank">
            Go to their Homepage
          </S.CompanyHomepage>
        )}
      </S.CompanyInfoContainer>
    </S.Container>
  );
}
