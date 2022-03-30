import { DetailsError } from "../components/Details/DetailsError";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function ErrorPage() {
  return (
    <>
      <Header />
      <DetailsError text="Page not found" />
      <Footer />
    </>
  );
}
