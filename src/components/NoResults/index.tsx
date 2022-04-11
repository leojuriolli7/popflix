import { useTranslation } from "react-i18next";
import * as S from "./styles";

export function NoResults() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.NoResultsContainer>
      <S.NoResultsMessage>{t("noResults")}</S.NoResultsMessage>
    </S.NoResultsContainer>
  );
}
