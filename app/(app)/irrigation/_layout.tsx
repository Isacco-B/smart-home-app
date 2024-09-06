import { Tabs } from "expo-router";
import { Image, Text, View, ImageSourcePropType } from "react-native";
import { icons } from "../../../constants";

type TabIconProps = {
  icon: ImageSourcePropType;
  name: string;
  color: string;
  focused: boolean;
};

function TabIcon({ icon, color, name, focused }: TabIconProps) {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
}

export default function IrrigationLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#333333",
        tabBarInactiveTintColor: "#9F9F9F",
        tabBarStyle: {
          backgroundColor: "#f3f3f3",
          borderTopWidth: 0.5,
          height: 74,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              name="Home"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="zone"
        options={{
          title: "Zones",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.layers}
              name="Zones"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="program"
        options={{
          title: "Programs",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.calendar}
              name="Programs"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
