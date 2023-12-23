import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View``;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: theme.colors.gray_400,
})`
    border: 1px;
    border-color: ${({theme})=> theme.colors.gray_300};
    color: ${({theme})=> theme.colors.white};
    height: 56px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: ${({theme})=> theme.font_size.xl};
    background-color: ${({theme})=> theme.colors.black_700};
    font-family: ${({theme})=> theme.font_family.regular};
`;

export const TextInputError = styled.Text`
    color: ${({theme})=> theme.colors.danger};
    font-size: ${({theme})=> theme.font_size.sm};
    font-family: ${({theme})=> theme.font_family.regular};
    margin-top: 7px;
`;