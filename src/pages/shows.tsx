import { MediaGrid } from "../components/MediaGrid";
import { PageWrapper } from "./pageWrapper";

export function Shows() {
  return <PageWrapper children={<MediaGrid mediaType="tv" />} />;
}
