import { CompanyDetails } from "../components/Details/CompanyDetails";
import { PageWrapper } from "./pageWrapper";

export function CompanyPage() {
  return <PageWrapper children={<CompanyDetails type="company" />} />;
}
