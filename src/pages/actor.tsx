import { ActorDetails } from "../components/Details/ActorDetails";
import { PageWrapper } from "./pageWrapper";

export function ActorPage() {
  return <PageWrapper children={<ActorDetails />} />;
}
