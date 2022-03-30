import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";

export function MovieDetailsPage() {
  return (
    <>
      <Header />
      <MediaDetails mediaType="movie" />
      <Footer />
    </>
  );
}
