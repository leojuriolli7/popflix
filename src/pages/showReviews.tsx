import { Review } from "../components/Review";
import { PageWrapper } from "./pageWrapper";

export function ShowReviewsPage() {
  return <PageWrapper children={<Review mediaType="tv" />} />;
}
