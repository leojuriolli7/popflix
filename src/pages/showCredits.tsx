import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CreditsDetails } from "../components/Details/CreditsDetails";

export function ShowCreditsPage() {
  return (
    <>
      <Header />
      <CreditsDetails mediaType="tv" />
      <Footer />
    </>
  );
}
