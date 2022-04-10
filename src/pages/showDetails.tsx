import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";
import { useTranslation } from "react-i18next";

export function ShowDetailsPage() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Header />
      <MediaDetails mediaType="tv" />
      <DetailsMediaList
        title={t("similarShowsTitle")}
        mediaType="tv"
        apiParam="similar"
      />
      <Footer />
    </>
  );
}
