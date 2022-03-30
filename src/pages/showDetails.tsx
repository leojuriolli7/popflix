import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaDetails } from "../components/Details/MediaDetails";

export function ShowDetailsPage() {
  return (
    <>
      <Header />
      <MediaDetails mediaType="tv" />
      <Footer />
    </>
  );
}
