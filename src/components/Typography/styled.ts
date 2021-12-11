import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};

  font-size: 5rem;

  @media (max-width: 1000px) {
    font-size: 4.4rem;
  }

  @media (max-width: 760px) {
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    font-size: 3.6rem;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.font.sizes.superLarge};

  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 2.8rem;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.6rem;

  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.medium};

  margin-bottom: 30px;
`;
