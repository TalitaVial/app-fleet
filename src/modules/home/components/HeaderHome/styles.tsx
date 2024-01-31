import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme})=> theme.colors.gray_700};
    gap: 5px;
    padding: 30px 25px;
    margin-top: 40px;
`;

export const UserInfo = styled.View`
    flex: 1;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const UserInfoAvatarContainer = styled.View`
    width: 55px;
    height: 55px;
    position: relative;
`;

export const UserInfoAvatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 6px;
`;

export const UserDetailsContainer = styled.View`

`;

export const UserDetailsGreeting = styled.Text`
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme})=> theme.font_size.lg};
    font-family: ${({theme})=> theme.font_family.regular};
`;

export const UserDetailsname = styled.Text`
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme})=> theme.font_size.lg};
    font-family: ${({theme})=> theme.font_family.extra_bold};
`;

export const UserLogoff = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const UserChangeAvatar = styled.TouchableOpacity`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({theme})=> theme.colors.white};
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    bottom: -5px;
    right: -5px;
`;