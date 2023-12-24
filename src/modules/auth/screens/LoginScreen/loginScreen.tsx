import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from 'zod';
import loginBackground from "../../../../shared/assets/images/login-background.png";
import { TextInputForm } from "../../../../shared/components/TextInputForm";
import logo from "../../../../shared/assets/images/logo-and-slogan.png";
import * as S from "./styles";

const loginSchema = z.object({
  email: z.string({
    required_error: 'Email é obrigatório'
  }).email({
    message: 'Email é inválido'
  }),
  password: z.string({
    required_error: 'Senha é obrigatória'
  }).min(6,{
    message: 'É obrigatório no minímo de 6 caracteres'
  })
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginSchema) =>{
    console.log(data)
  }

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
         onPress={handleSubmit(onSubmit)}/>
      </S.FormContainer>
    </S.ImageBackground>
  );
}
