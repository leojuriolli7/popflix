import { MediaGrid } from "../components/MediaGrid";
import { PageWrapper } from "./pageWrapper";

export function Movies() {
  return <PageWrapper children={<MediaGrid mediaType="movie" />} />;
}
