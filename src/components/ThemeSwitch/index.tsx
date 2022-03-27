import { lighten, shade } from "polished";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/Theme.store";

interface ThemeSwitchProps {
  height: number;
  width: number;
  handleDiameter: number;
  checkedIcon: any;
  uncheckedIcon: any;
}

export function ThemeSwitch({
  height,
  width,
  handleDiameter,
  checkedIcon,
  uncheckedIcon,
}: ThemeSwitchProps) {
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
      checkedHandleIcon={checkedIcon}
      uncheckedHandleIcon={uncheckedIcon}
      height={height}
      width={width}
      handleDiameter={handleDiameter}
      offColor={shade(0.3, colors.primary)}
      onColor={lighten(0.3, colors.primary)}
    />
  );
}
