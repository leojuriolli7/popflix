import { DetailsError } from "../components/Details/DetailsError";
import { PageWrapper } from "./pageWrapper";

export function ErrorPage() {
  return <PageWrapper children={<DetailsError text="Page not found" />} />;
}
