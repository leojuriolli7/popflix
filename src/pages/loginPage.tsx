import { Login } from "../components/Login";
import { PageWrapper } from "./pageWrapper";

export function LoginPage() {
  return <PageWrapper children={<Login />} />;
}
