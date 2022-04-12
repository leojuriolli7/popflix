import { HomepageWrapper } from "../components/HomepageWrapper";
import { PageWrapper } from "./pageWrapper";

export function Home() {
  return <PageWrapper children={<HomepageWrapper />} />;
}
