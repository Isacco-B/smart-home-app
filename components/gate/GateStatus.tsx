import {
  VStack,
  Box,
  Center,
  Heading,
  Progress,
  ProgressFilledTrack,
  Text,
  Divider,
} from "../ui";
import GateAdvancedStatus from "./GateAdvancedStatus";

export default function GateStatus({
  showAdvancedStatus,
}: {
  showAdvancedStatus: boolean;
}) {
  return (
    <Box className="w-full bg-background-0 rounded-lg mt-12 p-4 py-8 border">
      <VStack space="2xl">
        <Center>
          <Text size="lg" bold>
            Stato:
          </Text>
          <Heading className="text-4xl" bold>
            Chiuso
          </Heading>
        </Center>
        <VStack space="md">
          <Text size="lg" bold>
            Posizione:
          </Text>
          <Progress value={55} className="w-full" size="xl">
            <ProgressFilledTrack />
          </Progress>
        </VStack>
        {showAdvancedStatus && (
          <VStack space="md">
            <Text size="xl" bold>
              Stato avantato:
            </Text>
            <GateAdvancedStatus />
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
