import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import * as S from "./styles";

export function HamburguerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <S.Container>
      <S.MenuToggle onClick={() => handleShow()}>
        <S.MenuToggleBar />
        <S.MenuToggleBar />
        <S.MenuToggleBar />
      </S.MenuToggle>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <S.HeaderContainer>
            <S.CloseButton onClick={() => setShow(false)} />
          </S.HeaderContainer>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </S.Container>
  );
}
