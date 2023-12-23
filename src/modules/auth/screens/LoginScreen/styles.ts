import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Button } from "../../../../shared/components/Button";

export const ImageBackground = styled.ImageBackground`
    flex: 1;
    background-color: ${({theme})=> theme.colors.black_700};
    height: 60%;

`;

export const Container = styled(SafeAreaView)`
    /* flex: 1; */
`;

export const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 250px;

`;

export const Logo= styled.Image`
    align-items: center;
`;

export const FormContainer = styled.View`
    padding: 0 30px;
    gap: 20px;

`;

export const TitleForm = styled.Text`
    color: ${({theme})=> theme.colors.gray_100};
    font-size: ${({theme})=> theme.font_size.xl};
    font-family: ${({theme})=> theme.font_family.bold};
    text-align: center;

`;

export const ButtonLogin = styled(Button)`
    margin-top: 20px;

`;
