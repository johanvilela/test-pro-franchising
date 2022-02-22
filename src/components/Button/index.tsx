import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

export default Button;
