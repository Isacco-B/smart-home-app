import { Center } from "@/components/ui/center";
import { Slot } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <Center className="w-full h-full bg-background-0 p-4">
      <Slot />
    </Center>
  );
}
