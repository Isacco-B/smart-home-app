import { Button, ButtonIcon, ButtonText, Heading, Text, VStack } from "@/components/ui";
import { Lightbulb } from "lucide-react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <VStack space="2xl">
      <VStack className="items-center mt-12">
        <Heading size="4xl" bold>
          SMART HOME
        </Heading>
        <Text size="lg">Seleziona una modalità</Text>
      </VStack>
      <ScrollView>
        <VStack space="md" className="px-8">
          <Link href="/gate" asChild>
            <Button className="flex-col items-center gap-3 h-48 border-b-4 border-secondary-400 rounded-t-lg">
              <ButtonIcon as={Lightbulb} className="w-12 h-12" />
              <ButtonText size="xl">Cancello</ButtonText>
            </Button>
          </Link>
          <Link href="/irrigation" asChild>
            <Button className="flex-col items-center gap-3 h-48 border-b-4 border-secondary-400 rounded-t-lg">
              <ButtonIcon as={Lightbulb} className="w-12 h-12" />
              <ButtonText size="xl">Irrigazione</ButtonText>
            </Button>
          </Link>
          <Link href="/tank" asChild>
            <Button className="flex-col items-center gap-3 h-48 border-b-4 border-secondary-400 rounded-t-lg">
              <ButtonIcon as={Lightbulb} className="w-12 h-12" />
              <ButtonText size="xl">Cisterna</ButtonText>
            </Button>
          </Link>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
