import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid red;

    margin-left: 10px;
    margin-right: 10px;
    
  `}
`;
