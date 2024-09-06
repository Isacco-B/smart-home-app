import React from "react";
import { Badge, BadgeText, Divider, HStack, Text, VStack } from "../ui";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

const gateStatus = [
  { name: "Fc-Apertura:", status: "caricamento" },
  { name: "Fc-Chiusura:", status: "caricamento" },
  { name: "Forocellule:", status: "caricamento" },
  { name: "Coste:", status: "caricamento" },
  { name: "Consumo:", status: "caricamento" },
  { name: "Ricevente:", status: "caricamento" },
];

function StatusItem({ name, status }: { name: string; status: string }) {
  return (
    <HStack className="items-center justify-between">
      <Text size="lg" bold>{name}</Text>
      <Badge
        size={isWeb ? "lg" : "md"}
        variant="solid"
        action={
          status === "attivo"
            ? "success"
            : status === "caricamento"
              ? "warning"
              : "error"
        }
        className="rounded-full"
      >
        <BadgeText>{status}</BadgeText>
      </Badge>
    </HStack>
  );
}

export default function GateAdvancedStatus() {
  return (
    <VStack space="md">
      {gateStatus.map((item, i) => (
        <React.Fragment key={item.name}>
          <StatusItem name={item.name} status={item.status} />
          {i < gateStatus.length - 1 && <Divider className="w-full" />}
        </React.Fragment>
      ))}
    </VStack>
  );
}
