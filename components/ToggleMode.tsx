import React, { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import { Pressable } from "./ui/pressable";
import { Icon, MoonIcon, SunIcon } from "./ui/icon";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  console.log(colorMode);
  return (
    <Pressable onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        className="stroke-background-700 fill-background-700"
      />
    </Pressable>
  );
};

export default ToggleMode;
