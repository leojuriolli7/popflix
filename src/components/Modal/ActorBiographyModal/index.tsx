import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import * as S from "./styles";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface ActorDetailsInterface {
  name: string;
  gender: number;
  place_of_birth: string;
  biography: string;
  profile_path: string;
  birthday: string;
  deathday?: string;
}

interface ActorBiographyModalProps {
  show: boolean;
  handleClose: () => void;
  actorDetails: ActorDetailsInterface | undefined;
  setShow: any;
}

export function ActorBiographyModal({
  show,
  handleClose,
  actorDetails,
  setShow,
}: ActorBiographyModalProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <S.ModalHeaderContainer>
          <S.TitleText>{actorDetails?.name} Biography</S.TitleText>
          <S.CloseButtonContainer onClick={() => setShow(false)}>
            {theme === "light" ? (
              <S.CloseButtonBlack />
            ) : (
              <S.CloseButtonWhite />
            )}
          </S.CloseButtonContainer>
        </S.ModalHeaderContainer>
      </Modal.Header>
      <Modal.Body>
        <S.BiographyText>{actorDetails?.biography}</S.BiographyText>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
