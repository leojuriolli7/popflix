import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MediaGrid } from "../components/MediaGrid";

export function Shows() {
  return (
    <>
      <Header />
      <MediaGrid mediaType="tv" />
      <Footer />
    </>
  );
}
