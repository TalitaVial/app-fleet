import { Controller, Control } from "react-hook-form";
import { TextInputProps } from "react-native";
import * as S from "./styles";

type Props = {
  control: Control<any>;
  name: string;
  label: string;
} & TextInputProps;

export const TextInputForm = ({ control, name, label, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <S.Container>
          <S.TextInput
            {...rest}
            placeholder={label}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {error?.message && (
            <S.TextInputError>{error.message}</S.TextInputError>
          )}
        </S.Container>
      )}
    />
  );
};
