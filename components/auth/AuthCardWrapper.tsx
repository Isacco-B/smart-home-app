import { Link } from "expo-router";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerSubtitle?: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export function AuthCardWrapper({
  children,
  headerTitle,
  headerSubtitle,
  backButtonLabel,
  backButtonHref,
}: AuthCardWrapperProps) {
  return (
    <VStack className="max-w-[440px] w-full" space="md">
      <VStack>
        <Heading size="3xl">{headerTitle}</Heading>
        <Text>{headerSubtitle}</Text>
      </VStack>
      <VStack className="w-full">{children}</VStack>
      <HStack className="self-center " space="sm">
        <Link href={backButtonHref as any}>
          <Text>{backButtonLabel}</Text>
        </Link>
      </HStack>
    </VStack>
  );
}
