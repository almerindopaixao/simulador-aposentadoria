import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.colors.text};
    padding: ${theme.spacings.medium};
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
