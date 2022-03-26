import { lighten, shade } from "polished";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/Theme.store";
import * as S from "./styles";

export function ThemeSwitch() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <Switch
      onChange={
        theme === "dark"
          ? () => dispatch(toggleTheme("light"))
          : () => dispatch(toggleTheme("dark"))
      }
      checked={theme === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      checkedHandleIcon={<S.DarkModeIcon />}
      uncheckedHandleIcon={<S.LightModeIcon />}
      height={15}
      width={40}
      handleDiameter={23}
      offColor={shade(0.3, colors.primary)}
      onColor={lighten(0.3, colors.primary)}
    />
  );
}
