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
`;
