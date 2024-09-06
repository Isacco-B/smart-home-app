import { Alert, AlertText, Box, Fab, FabIcon, VStack } from "@/components/ui";
import { Activity } from "lucide-react-native";
import { useState } from "react";
import { ScrollView } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import GateActionButton from "@/components/gate/GateActionButton";
import GateStatus from "@/components/gate/GateStatus";

export default function GateScreen() {
  const [showAdvancedStatus, setShowAdvancedStatus] = useState(false);
  return (
    <>
      <ScrollView>
        <VStack className="p-4 md:w-3/4 md:mx-auto ">
          <Alert action="success" variant="solid">
            <AlertText>Description of alert!</AlertText>
          </Alert>

          <Box className="lg:flex-row lg:gap-4 lg:items-center lg:justify-center">
            <GateStatus showAdvancedStatus={showAdvancedStatus} />
            <GateActionButton />
          </Box>
        </VStack>
        <RNDateTimePicker value={new Date()} mode="time" />
      </ScrollView>
      <Fab
        size="md"
        placement="bottom right"
        onPress={() => setShowAdvancedStatus(!showAdvancedStatus)}
        className="bg-secondary-700"
      >
        <FabIcon as={Activity} />
      </Fab>
    </>
  );
}
