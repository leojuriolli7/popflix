import { CreditsDetails } from "../components/Details/CreditsDetails";
import { PageWrapper } from "./pageWrapper";

export function MovieCreditsPage() {
  return <PageWrapper children={<CreditsDetails mediaType="movie" />} />;
}
