import styled from "styled-components/native";
import { TypeButton } from ".";
import theme from "../../theme";

type ContainerProps = {
    type: TypeButton,
    isLoading?: boolean,
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme})=> theme.colors.brand};

    ${({ type, theme }) =>
    type === 'buttonRed' && `background-color: ${theme.colors.brand};`}
  
    ${({ type, theme }) =>
    type === 'outlined' && `background-color: ${theme.colors.black_700};`}

    ${({ isLoading }) =>
    isLoading && `opacity: 0.5;`}
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme})=> theme.font_size.md};
    font-family: ${({theme})=> theme.font_family.bold};
`;

export const Loading = styled.ActivityIndicator.attrs({
    color: theme.colors.white
})``;