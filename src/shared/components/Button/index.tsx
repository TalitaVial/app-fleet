import * as S from './styles'

export type TypeButton = 'buttonRed' | 'outlined';


type Props = {
    title: string;
    type?: TypeButton;
    onPress: () => void;
}

export const Button = ({title, onPress, type = 'buttonRed', ...rest}: Props) =>{
    return(
        <S.Container {...rest} type={type} onPress={onPress}>
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}