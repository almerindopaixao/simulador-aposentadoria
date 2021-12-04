import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${theme.spacings.medium};
  `}
`;
