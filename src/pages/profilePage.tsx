import { UserProfile } from "../components/UserProfile";
import { PageWrapper } from "./pageWrapper";

export function ProfilePage() {
  return <PageWrapper children={<UserProfile />} />;
}
