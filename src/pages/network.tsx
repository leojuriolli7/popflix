import { CompanyDetails } from "../components/Details/CompanyDetails";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function NetworkPage() {
  return (
    <>
      <Header />
      <CompanyDetails type="network" />
      <Footer />
    </>
  );
}
