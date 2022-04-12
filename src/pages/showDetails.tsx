import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "./pageWrapper";

export function ShowDetailsPage() {
  const { t }: { t: any } = useTranslation();

  return (
    <PageWrapper
      children={
        <>
          <MediaDetails mediaType="tv" />
          <DetailsMediaList
            title={t("similarShowsTitle")}
            mediaType="tv"
            apiParam="similar"
          />
        </>
      }
    />
  );
}
