import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaGrid } from "../components/MediaGrid";

export function Movies() {
  return (
    <>
      <Header />
      <MediaGrid mediaType="movie" />
      <Footer />
    </>
  );
}
