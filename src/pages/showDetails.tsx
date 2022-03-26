import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

export function ShowDetailsPage() {
  let { id } = useParams();

  return (
    <>
      <Header />
      <p>show id: {id}</p>
    </>
  );
}
