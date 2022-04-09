import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import { isoCountries } from "../../../utils/constants";

interface ParentCompaniesInterface {
  name: string;
  id: number;
  logo_path: string;
}

interface CompanyDetailsInterface {
  description?: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  origin_country: string;
  name: string;
  parent_company?: ParentCompaniesInterface;
}

interface CompanyDetailsProps {
  type: "network" | "company";
}

export function CompanyDetails({ type }: CompanyDetailsProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] =
    useState<CompanyDetailsInterface>();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`${type}/${id}?api_key=24e0e0f71e0ac9cb9c5418459514eda9`)
      .then((response) => setCompanyDetails(response.data));
  }, [id, type]);

  function getCountryName(countryCode: any) {
    if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
    } else {
      return countryCode;
    }
  }

  return companyDetails?.id ? (
    <S.Container>
      <S.Content>
        <S.CompanyLogoAndNameContainer>
          <S.CompanyLogoContainer>
            {companyDetails?.logo_path && (
              <S.CompanyLogo
                src={`https://image.tmdb.org/t/p/w500/${companyDetails?.logo_path}`}
              />
            )}
          </S.CompanyLogoContainer>
        </S.CompanyLogoAndNameContainer>
      </S.Content>
      <S.CompanyInfoContainer>
        <S.CompanyNameContainer>
          <S.CompanyName>{companyDetails?.name}</S.CompanyName>
        </S.CompanyNameContainer>
        <S.CompanyOriginCountry>
          Origin Country:{" "}
          {getCountryName(companyDetails?.origin_country) || "Unknown"}
        </S.CompanyOriginCountry>
        {companyDetails?.parent_company && (
          <S.ParentCompany>
            Parent Company:{" "}
            <S.ParentCompanySpan
              onClick={() =>
                navigate(`/company/${companyDetails.parent_company?.id}`)
              }
            >
              {companyDetails.parent_company.name}
            </S.ParentCompanySpan>
          </S.ParentCompany>
        )}
        {companyDetails?.headquarters && (
          <S.CompanyHeadquarters>
            Headquarters: {companyDetails?.headquarters}
          </S.CompanyHeadquarters>
        )}
        {companyDetails?.description && (
          <S.CompanyDescription>
            {companyDetails?.description}
          </S.CompanyDescription>
        )}

        {companyDetails?.homepage && (
          <S.CompanyHomepage href={companyDetails?.homepage} target="_blank">
            {`Go to ${companyDetails?.name} Homepage`}
          </S.CompanyHomepage>
        )}
      </S.CompanyInfoContainer>
    </S.Container>
  ) : (
    <DetailsError text="No Company with this id" />
  );
}