import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import * as S from "./styles";
import { DetailsError } from "../DetailsError";
import { isoCountries } from "../../../utils/constants";
import { useTranslation } from "react-i18next";
import { DetailsReturnArrow } from "../DetailsReturnArrow";
import { fetchCompanyDetails } from "../../../utils/requests";

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
  const { t }: { t: any } = useTranslation();
  const [doesMediaExist, setDoesMediaExist] = useState(true);

  const fetchData = async () => {
    await fetchCompanyDetails(type, id)
      .then((response) => setCompanyDetails(response.data))
      .catch((error) => {
        console.log(error.message);
        setDoesMediaExist(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  function getCountryName(countryCode: any) {
    if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
    } else {
      return countryCode;
    }
  }

  return doesMediaExist ? (
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
        {" "}
        <DetailsReturnArrow />
        <S.CompanyNameContainer>
          <S.CompanyName>{companyDetails?.name}</S.CompanyName>
        </S.CompanyNameContainer>
        <S.CompanyOriginCountry>
          {`${t("originCountry")}: `}
          {getCountryName(companyDetails?.origin_country) || t("unknown")}
        </S.CompanyOriginCountry>
        {companyDetails?.parent_company && (
          <S.ParentCompany>
            {`${t("parentCompany")}: `}
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
            {`${t("headquarters")}: ${companyDetails?.headquarters}`}
          </S.CompanyHeadquarters>
        )}
        {companyDetails?.description && (
          <S.CompanyDescription>
            {companyDetails?.description}
          </S.CompanyDescription>
        )}
        {companyDetails?.homepage && (
          <S.CompanyHomepage href={companyDetails?.homepage} target="_blank">
            {t("companyHomepage", { name: companyDetails.name })}
          </S.CompanyHomepage>
        )}
      </S.CompanyInfoContainer>
    </S.Container>
  ) : (
    <DetailsError text={t("noCompanyError")} />
  );
}
