import NextLink, { LinkProps } from 'next/link';

import * as S from './styles';

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

const Link = ({ href, children, ...props }: LinkComponentProps) => {
  return (
    <S.Container>
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
    </S.Container>
  );
};

export default Link;
