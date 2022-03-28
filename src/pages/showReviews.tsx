import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Review } from "../components/Review";

export function ShowReviewsPage() {
  return (
    <>
      <Header />
      <Review mediaType="tv" />
      <Footer />
    </>
  );
}
