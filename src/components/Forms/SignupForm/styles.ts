import { darken, lighten } from "polished";
import styled from "styled-components";

export const InputLabel = styled.label`
  font-size: 1.5rem;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    background: ${(props) =>
      props.theme.title === "light"
        ? darken(0.06, props.theme.colors.background)
        : lighten(0.06, props.theme.colors.background)};
    font-size: 1.3rem;
    border: 1px transparent solid;
    width: 100%;
    padding: 1rem 2.7rem 1rem 0.5rem;
    border-radius: 20px;
    color: ${(props) => props.theme.colors.sectionText};
  }
`;
