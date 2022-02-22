import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, ...rest }: InputProps) => {
  return (
    <S.Container>
      <input type="text" name={name} {...rest} />
    </S.Container>
  );
};

export default Input;
