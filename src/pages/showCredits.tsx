import { CreditsDetails } from "../components/Details/CreditsDetails";
import { PageWrapper } from "./pageWrapper";

export function ShowCreditsPage() {
  return <PageWrapper children={<CreditsDetails mediaType="tv" />} />;
}
