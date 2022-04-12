import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "./pageWrapper";

export function MovieDetailsPage() {
  const { t }: { t: any } = useTranslation();
  return (
    <PageWrapper
      children={
        <>
          <MediaDetails mediaType="movie" />
          <DetailsMediaList
            title={t("similarMoviesTitle")}
            mediaType="movie"
            apiParam="similar"
          />
        </>
      }
    />
  );
}
