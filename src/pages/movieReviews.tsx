import { Review } from "../components/Review";
import { PageWrapper } from "./pageWrapper";

export function MovieReviewsPage() {
  return <PageWrapper children={<Review mediaType="movie" />} />;
}
