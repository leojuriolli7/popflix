import { Spinner } from "react-bootstrap";
import * as S from "./styles";

export function SuspenseSpinner() {
  return (
    <S.Container>
      <Spinner animation="border" />
    </S.Container>
  );
}
