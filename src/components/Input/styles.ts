import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    height: 5.6rem;

    input {
      width: 100%;

      height: 5.6rem;
    }
  `}
`;
