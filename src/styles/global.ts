import { darken, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-box-shadow: ${(props) =>
      props.theme.title === "dark" &&
      "inset 4px 77px 132px 13px rgba(0, 0, 0, 0.84)"};
  box-shadow: ${(props) =>
    props.theme.title === "dark" &&
    "inset 4px 77px 132px 13px rgba(0, 0, 0, 0.84)"};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    transition: background-color 0.4s linear;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
  font-family: "Roboto", sans-serif;
	font-weight: 400; 

  .offcanvas {
    background-color: ${(props) =>
      props.theme.title === "dark"
        ? props.theme.colors.primary
        : darken(0.06, props.theme.colors.background)};
          box-shadow: ${(props) =>
            props.theme.title === "dark" &&
            "inset 4px 4px 55px 14px rgb(0 0 0 / 84%)"};
  }

  .offcanvas-end {
    @media(max-width: 426px) {
      width: 100vw;
    }
  }
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600; 
  }

  .modal-content {
    background-color: ${(props) =>
      props.theme.title === "dark"
        ? props.theme.colors.primary
        : darken(0.06, props.theme.colors.background)};
    border-radius: 20px;

    .btn {
      padding: 0.475rem 1.25rem;
      font-size: 1.2rem;
      border-radius: 40px;
    }
  }

  .modal {
    padding: 0;
  }

  .modal-dialog {
    @media (min-width: 740px) {
      max-width: 688px;
    }
  }

  .popover {
    background-color: ${(props) =>
      props.theme.title === "dark"
        ? lighten(0.06, props.theme.colors.primary)
        : props.theme.colors.background};
    border-radius: 15px;
  }

  .popover-header {
    background-color: ${(props) =>
      props.theme.title === "dark"
        ? lighten(0.06, props.theme.colors.primary)
        : props.theme.colors.background};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

`;
