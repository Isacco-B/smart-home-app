import { Lightbulb, DoorOpen, Footprints } from "lucide-react-native";
import { Box, Button, ButtonIcon, ButtonText, HStack, VStack } from "../ui";

type ActionButtonProps = {
  title: string;
  icon?: React.ElementType;
  onPress?: () => void;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
};

function ActionButton({
  title,
  icon,
  onPress,
  className,
  iconClassName,
  titleClassName,
}: ActionButtonProps) {
  return (
    <Button
      className={`flex-col items-center gap-3 h-32 md:h-42 md:w-42 border-b-4 border-secondary-400 shadow-soft-2 rounded-t-lg ${className}`}
      onPress={onPress}
    >
      {icon && (
        <ButtonIcon as={icon} className={`w-12 h-12 ${iconClassName}`} />
      )}
      <ButtonText className={titleClassName}>{title}</ButtonText>
    </Button>
  );
}

export default function GateActionButton() {
  return (
    <Box className="w-full mt-24">
      <VStack className="items-center" space="2xl">
        <HStack className="items-center justify-between gap-2 md:gap-12 w-full">
          <ActionButton
            title="Garage"
            icon={Lightbulb}
            className="flex-1"
            titleClassName="text-sm md:text-lg"
          />
          <ActionButton
            title="Cancellino"
            icon={DoorOpen}
            className="flex-1"
            titleClassName="text-sm md:text-lg"
          />
          <ActionButton
            title="Pedonabile"
            icon={Footprints}
            className="flex-1"
            titleClassName="text-sm md:text-lg"
          />
        </HStack>
        <ActionButton
          title="Garage"
          icon={Lightbulb}
          className="w-[50%]"
          titleClassName="text-sm md:text-lg"
        />
      </VStack>
    </Box>
  );
}
