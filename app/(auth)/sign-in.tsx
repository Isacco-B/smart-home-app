import { useState } from "react";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { LoginSchema, LoginSchemaType } from "@/schemas";
import { Link, router } from "expo-router";
import { useSession } from "@/context/AuthContext";
import { AuthCardWrapper } from "@/components/auth/AuthCardWrapper";
import {
  Button,
  ButtonText,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  useToast,
  VStack,
} from "@/components/ui";

export default function SignIn() {
  const { signIn } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const toast = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
    console.log("Pressed");
    signIn();
    router.replace("/");
    reset();
  };

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <AuthCardWrapper
      headerTitle="Accedi"
      headerSubtitle="Accedi per iniziare a utilizzare SmartHome"
      backButtonLabel="Non hai un account?"
      backButtonHref="/sign-up"
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
                  await LoginSchema.parseAsync({ email: value });
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
        <FormControl
          isInvalid={!!errors.password || !validated.passwordValid}
          className="w-full"
        >
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await LoginSchema.parseAsync({ password: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="La tua password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
                <InputSlot onPress={handleState} className="pr-3">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message ||
                (!validated.passwordValid && "Password was incorrect")}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <HStack className="w-full justify-between ">
          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                size="sm"
                value="Salva credenziali"
                isChecked={value}
                onChange={onChange}
                aria-label="Salva credenziali"
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Salva credenziali</CheckboxLabel>
              </Checkbox>
            )}
          />
          <Link href="/reset-password">
            <Text className="font-medium text-sm text-primary-700">
              Password dimenticata?
            </Text>
          </Link>
        </HStack>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Accedi</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </AuthCardWrapper>
  );
}
