import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CreditsDetails } from "../components/Details/CreditsDetails";

export function MovieCreditsPage() {
  return (
    <>
      <Header />
      <CreditsDetails mediaType="movie" />
      <Footer />
    </>
  );
}
