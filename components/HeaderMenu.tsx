import { View } from "react-native";
import { Icon, MenuIcon } from "./ui/icon";
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from "./ui/menu";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

export default function HeaderMenu() {
  return (
    <Menu
      placement="bottom right"
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <View {...triggerProps}>
            <Icon
              as={MenuIcon}
              className={
                isWeb ? "w-8 h-8 hover:scale-105" : "w-6 h-6 active:opacity-50"
              }
            />
          </View>
        );
      }}
    >
      <MenuItem key="Help Center" textValue="Help Center" className="p-2">
        <MenuItemLabel size="sm">Help Center</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="Logout" textValue="Logout" className="p-2">
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}
