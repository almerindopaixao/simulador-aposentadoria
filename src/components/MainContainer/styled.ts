import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.large};
    max-width: 116rem;

    @media (max-width: 600px) {
      padding: ${theme.spacings.small};
    }
  `}
`;
