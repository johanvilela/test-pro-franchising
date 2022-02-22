import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;

    height: 5.6rem;

    background-color: ${theme.colors.purple_300};

    color: ${theme.colors.white};
  `}
`;
