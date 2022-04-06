import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";

export function ShowDetailsPage() {
  return (
    <>
      <Header />
      <MediaDetails mediaType="tv" />
      <DetailsMediaList
        title="Similar Shows"
        mediaType="tv"
        apiParam="similar"
      />
      <Footer />
    </>
  );
}
