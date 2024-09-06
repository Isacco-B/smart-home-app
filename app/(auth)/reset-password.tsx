import { useState } from "react";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { ResetPasswordSchemaType, ResetSchema } from "@/schemas";
import { AuthCardWrapper } from "@/components/auth/AuthCardWrapper";
import {
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  useToast,
  VStack,
} from "@/components/ui";

export default function ResetPassword() {
  const [validated, setValidated] = useState({
    emailValid: true,
  });
  const toast = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ResetPasswordSchemaType) => {
    console.log(data);
    reset();
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <AuthCardWrapper
      headerTitle="Reimposta password"
      headerSubtitle="Inserisci la tua email per reimpostare la tua password"
      backButtonLabel="Torna indietro"
      backButtonHref="/sign-in"
    >
      <VStack space="xl" className="w-full">
        <FormControl
          isInvalid={!!errors?.email || !validated.emailValid}
          className="w-full"
        >
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await ResetSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  placeholder="La tua email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message ||
                (!validated.emailValid && "Email ID not found")}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Reimposta password</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </AuthCardWrapper>
  );
}
