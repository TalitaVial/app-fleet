import * as S from "./styles";

export type TypeButton = "buttonRed" | "outlined";

type Props = {
  title: string;
  type?: TypeButton;
  onPress: () => void;
  isLoading?: boolean;
};

export const Button = ({
  title,
  onPress,
  type = "buttonRed",
  isLoading,
  ...rest
}: Props) => {
  return (
    <S.Container {...rest} type={type} isLoading={isLoading} onPress={isLoading ? ()=> null : onPress}>
      {isLoading ? <S.Loading /> : <S.Title>{title}</S.Title>}
    </S.Container>
  );
};
