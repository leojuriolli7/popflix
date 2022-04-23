import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import * as S from "./styles";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useTranslation } from "react-i18next";
import { ActorDetailsInterface } from "../../../utils/interfaces";

interface ActorBiographyModalProps {
  show: boolean;
  handleClose: () => void;
  actorDetails: ActorDetailsInterface | undefined;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ActorBiographyModal({
  show,
  handleClose,
  actorDetails,
  setShow,
}: ActorBiographyModalProps) {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { t }: { t: any } = useTranslation();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <S.ModalHeaderContainer>
          <S.TitleText>
            {t("actorBiographyModalTitle", { name: actorDetails?.name })}
          </S.TitleText>
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
