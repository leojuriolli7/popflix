import { EpisodeDetails } from "../components/Details/EpisodeDetails";
import { PageWrapper } from "./pageWrapper";

export function EpisodeDetailsPage() {
  return <PageWrapper children={<EpisodeDetails />} />;
}
