import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    max-width: 116rem;
    min-height: 100vh;
    border: 1px solid red;
  `}
`;
