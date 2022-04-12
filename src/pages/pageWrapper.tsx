import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PageWrapper({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
