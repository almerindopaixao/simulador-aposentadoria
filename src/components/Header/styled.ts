import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${theme.spacings.medium};
    min-height: 25rem;
  `}
`;
