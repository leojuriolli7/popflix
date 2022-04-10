import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";
import { useTranslation } from "react-i18next";

export function MovieDetailsPage() {
  const { t }: { t: any } = useTranslation();
  return (
    <>
      <Header />
      <MediaDetails mediaType="movie" />
      <DetailsMediaList
        title={t("similarMoviesTitle")}
        mediaType="movie"
        apiParam="similar"
      />
      <Footer />
    </>
  );
}
