import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import * as S from "./styles";

export function HamburguerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <S.MenuToggle onClick={() => handleShow()}>
        <S.MenuToggleBar />
        <S.MenuToggleBar />
        <S.MenuToggleBar />
      </S.MenuToggle>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
