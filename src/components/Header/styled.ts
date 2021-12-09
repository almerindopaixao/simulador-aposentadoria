import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 30rem;
  color: white;

  div {
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacings.large};
    max-width: 116rem;

    height: calc(30rem - 12rem);

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 600px) {
      padding: ${({ theme }) => theme.spacings.medium};
    }
  }

  h1 {
    font-size: 5rem;

    @media (max-width: 1000px) {
      font-size: 4.4rem;
    }

    @media (max-width: 760px) {
      font-size: 4rem;
    }

    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }
`;
