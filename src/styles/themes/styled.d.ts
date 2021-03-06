import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      sectionText: string;
      backgroundSecondary: string;
      logo: string;
      skeleton1: string;
      skeleton2: string;
    };
  }
}
