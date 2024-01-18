import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import loginBackground from "../../../../shared/assets/images/login-background.png";
import { TextInputForm } from "../../../../shared/components/TextInputForm";
import logo from "../../../../shared/assets/images/logo-and-slogan.png";
import { PublicStackParamList } from "../../../../routes/public.routes";
import { LoginSchema, loginSchema } from "./validation";
import * as S from "./styles";
import { getUserLoggedService, loginService } from "../../../../shared/services/authService";
import { useAuthStore } from "../../../../shared/store/useAuthStore";
import { useToastStore } from "../../../../shared/store/useToastStore";

type LoginScreenProps = NativeStackNavigationProp<
  PublicStackParamList,
  "LoginScreen"
>;

export default function LoginScreen() {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const setMessage = useToastStore(state=> state.setMessage);
  const { navigate } = useNavigation<LoginScreenProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
   
    try {
      setIsLoading(true);
      const response = await loginService(data);
      setToken(response.token);
      const userLogged = await getUserLoggedService();
      setUser({
        id: userLogged.id,
        name: userLogged.name,
        photo: userLogged.photo,
      });

      setMessage({
        text: 'Login realizado com sucesso',
        type: 'sucess'
      })
    } catch (error: any) {
      setMessage({
        text: error?.message,
        type: 'danger'
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.ImageBackground source={loginBackground}>
      <S.Container>
        <S.LogoContainer>
          <S.Logo source={logo} />
        </S.LogoContainer>
      </S.Container>
      <S.FormContainer>
        <S.TitleForm>Acesse sua conta</S.TitleForm>
        <TextInputForm
          control={control}
          name="email"
          label="E-mail"
          keyboardType="email-address"
        />
        <TextInputForm
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
        />
        <S.ButtonLogin
          isLoading={isLoading}
          title="Entrar"
          onPress={handleSubmit(onSubmit)}
        />
      </S.FormContainer>
      <S.CreateAccountContainer>
        <S.TitleCreateAccount>Ainda não tem acesso?</S.TitleCreateAccount>
        <S.ButtonCreateAccount
          title="Criar conta"
          type="outlined"
          onPress={() => navigate("CreateAccountScreen")}
        />
      </S.CreateAccountContainer>
    </S.ImageBackground>
  );
}
