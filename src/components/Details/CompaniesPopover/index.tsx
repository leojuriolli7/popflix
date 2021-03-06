import { OverlayTrigger, Popover } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MediaDetailsProps } from "../../../utils/interfaces";
import * as S from "./styles";

export function CompaniesPopover({
  mediaType,
  currentMedia,
}: MediaDetailsProps) {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();

  return (
    <OverlayTrigger
      placement="bottom"
      trigger="click"
      overlay={
        <Popover>
          <Popover.Header>
            <S.PopoverTitle>
              {t("productionCompanies", {
                name: currentMedia.name,
                title: currentMedia.title,
              })}
            </S.PopoverTitle>
          </Popover.Header>
          <Popover.Body>
            <S.ProductionCompaniesContainer>
              {currentMedia.production_companies.map((company) => (
                <S.ProductionCompanyName
                  key={company.id}
                  onClick={() => navigate(`/company/${company.id}`)}
                >
                  {company.name}
                </S.ProductionCompanyName>
              ))}
            </S.ProductionCompaniesContainer>
          </Popover.Body>
        </Popover>
      }
    >
      <S.OpenPopoverText>{t("viewAllCompanies")}</S.OpenPopoverText>
    </OverlayTrigger>
  );
}
