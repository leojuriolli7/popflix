import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";
import { DetailsMediaList } from "../components/Details/DetailsMediaList";

export function MovieDetailsPage() {
  return (
    <>
      <Header />
      <MediaDetails mediaType="movie" />
      <DetailsMediaList
        title="Similar Movies"
        mediaType="movie"
        apiParam="similar"
      />
      <Footer />
    </>
  );
}
