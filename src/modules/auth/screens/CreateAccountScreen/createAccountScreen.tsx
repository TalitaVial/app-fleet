import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import loginBackground from "../../../../shared/assets/images/login-background.png";
import { TextInputForm } from "../../../../shared/components/TextInputForm";
import logo from "../../../../shared/assets/images/logo-and-slogan.png";
import { CreateAccountSchema, createAccountSchema } from "./validation";
import * as S from "./styles";

export default function CreateAccountScreen(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<CreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = (data: CreateAccountSchema) => {
    console.log(data);
  };

  return (
    <S.ImageBackground source={loginBackground}>
      <S.ScroolView>
        <S.Container>
          <S.LogoContainer>
            <S.Logo source={logo} />
          </S.LogoContainer>
        </S.Container>
        <S.FormContainer>
          <S.TitleForm>Crie sua conta</S.TitleForm>
          <TextInputForm control={control} name="name" label="Nome" />
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
          <TextInputForm
            control={control}
            name="confirmPassword"
            label="Confirmar a senha"
            secureTextEntry
          />
          <S.ButtonLogin
            isLoading={isLoading}
            title="Criar a conta"
            onPress={handleSubmit(onSubmit)}
          />
        </S.FormContainer>
        <S.CreateAccountContainer>
          <S.ButtonCreateAccount
            title="Voltar para login"
            type="outlined"
            onPress={() => props.navigation.navigate("LoginScreen")}
          />
        </S.CreateAccountContainer>
      </S.ScroolView>
    </S.ImageBackground>
  );
}
