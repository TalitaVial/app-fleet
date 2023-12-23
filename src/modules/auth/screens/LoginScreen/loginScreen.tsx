import { useForm } from "react-hook-form";
import loginBackground from "../../../../shared/assets/images/login-background.png";
import logo from "../../../../shared/assets/images/logo-and-slogan.png";
import * as S from "./styles";
import { TextInputForm } from "../../../../shared/components/TextInputForm";

export default function LoginScreen() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) =>{
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
         <S.ButtonLogin  title="Entrar" onPress={handleSubmit(onSubmit)}/>
      </S.FormContainer>
    </S.ImageBackground>
  );
}
