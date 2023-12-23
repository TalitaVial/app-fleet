import * as S from './styles'

export const Loading = (props: any) =>{
    return (
        <S.Container {...props}>
            <S.LoadIndicator />
        </S.Container>
    )
}