import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useSession } from "@/context/AuthContext";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="gate"
      />
      <Stack.Screen
        name="tank"
      />
      <Stack.Screen
        name="irrigation"
      />
    </Stack>
  );
}
