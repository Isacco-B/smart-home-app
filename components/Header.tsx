import {
  Badge,
  BadgeIcon,
  BadgeText,
  Divider,
  GlobeIcon,
  HStack,
  Text,
  VStack,
} from "./ui";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import HeaderMenu from "./HeaderMenu";

function HeaderTitle({ name }: { name: string }) {
  return (
    <Text size={isWeb ? "2xl" : "lg"} bold>
      {name}
    </Text>
  );
}

function HeaderConnectionStatus({ status }: { status: string }) {
  return (
    <Badge
      size={isWeb ? "lg" : "md"}
      variant="solid"
      action="success"
      className="rounded-full"
    >
      <BadgeText>{status}</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
}

export default function Header() {
  return (
    <VStack space="sm" className="bg-background-100 p-4">
      <HStack className="items-center justify-between">
        <HeaderTitle name="Isacco" />
        <HeaderConnectionStatus status="Connesso" />
        <HeaderMenu />
      </HStack>
      <Divider className="w-[85%] mx-auto bg-black" />
    </VStack>
  );
}
