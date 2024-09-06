import React from "react";
import { Slot } from "expo-router";
import { SessionProvider } from "../context/AuthContext";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import "@/global.css";
import Header from "@/components/Header";

const queryClient = new QueryClient();

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

export default function RootLayout() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );
  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <GluestackUIProvider mode={colorMode}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <SafeAreaView style={{ flex: 1, padding: 4 }}>
                <Header />
                <Slot />
              </SafeAreaView>
            </SafeAreaProvider>
          </SessionProvider>
        </QueryClientProvider>
      </GluestackUIProvider>
    </>
  );
}
