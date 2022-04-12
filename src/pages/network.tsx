import { CompanyDetails } from "../components/Details/CompanyDetails";
import { PageWrapper } from "./pageWrapper";

export function NetworkPage() {
  return <PageWrapper children={<CompanyDetails type="network" />} />;
}
