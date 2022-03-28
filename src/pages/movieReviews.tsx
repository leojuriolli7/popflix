import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Review } from "../components/Review";

export function MovieReviewsPage() {
  return (
    <>
      <Header />
      <Review mediaType="movie" />
      <Footer />
    </>
  );
}
