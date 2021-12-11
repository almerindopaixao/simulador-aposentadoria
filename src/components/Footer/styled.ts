import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${theme.spacings.medium};
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}

  p {
    text-transform: uppercase;
    text-align: center;
    padding: ${({ theme }) => theme.spacings.large};

    @media (max-width: 600px) {
      font-size: 1.3rem;
      line-height: 20px;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: normal;
    }
  }
`;
