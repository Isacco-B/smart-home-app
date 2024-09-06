import {
  Box,
  Button,
  ButtonText,
  CloseIcon,
  EditIcon,
  Fab,
  FabIcon,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
} from "@/components/ui";
import { Droplets } from "lucide-react-native";
import { useState } from "react";
import { ScrollView } from "react-native";

function TestModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg" className="text-typography-950">
            Livello Acqua
          </Heading>
          <ModalCloseButton>
            <Icon
              as={CloseIcon}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody className="mt-12">
          <VStack className="border-x-2 border-b-2 rounded-b-lg h-[270px] justify-end">
            <Box className="h-24 bg-blue-300 relative">
              <Text
                size="2xl"
                bold
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              >
                90%
              </Text>
            </Box>
            <Box className="h-24 bg-blue-400">
              <Text
                size="2xl"
                bold
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              >
                60%
              </Text>
            </Box>
            <Box className="h-24 bg-blue-500 rounded-b-md">
              <Text
                size="2xl"
                bold
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              >
                30%
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default function IrrigationScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box className="flex-1 p-4">
      <Box className="w-full">
        <ScrollView>
          <VStack className="p-4 bg-background-0 rounded-lg border border-gray-400" space="lg">
            <HStack className="items-center justify-between">
              <Text size="xl" bold>
                Zona 1 - Orto
              </Text>
              <Icon as={EditIcon} className="w-6 h-6" />
            </HStack>
            <Image
              source={
                "https://cloud.isaccobertoli.com/s/PKTqLKAXppgZ9pX/download/IMG20240804123255.jpg"
              }
              className="w-full h-64 rounded-lg"
              alt="zona"
            />
            <Button>
              <ButtonText>Esegui Zona</ButtonText>
            </Button>
          </VStack>
        </ScrollView>
      </Box>
      <TestModal showModal={showModal} setShowModal={setShowModal} />
      <Fab
        size="lg"
        placement="bottom right"
        onPress={() => setShowModal(!showModal)}
      >
        <FabIcon as={Droplets} />
      </Fab>
    </Box>
  );
}
