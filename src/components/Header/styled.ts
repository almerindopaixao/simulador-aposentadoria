import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 40rem;
  color: white;

  @media (max-width: 600px) {
    min-height: 45rem;
  }

  @media (max-width: 500px) {
    min-height: 50rem;
  }

  @media (max-width: 330px) {
    min-height: 55rem;
  }

  .logo-container {
    margin-right: 16px;
  }

  svg {
    width: 72px;
    height: 72px;

    @media (max-width: 760px) {
      width: 64px;
      height: 64px;
    }

    @media (max-width: 500px) {
      width: 58px;
      height: 58px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  & > div:first-child {
    display: flex;
    align-items: center;

    margin: 0 auto;
    padding: ${({ theme }) => theme.spacings.large};
    max-width: 116rem;

    height: calc(35rem - 18rem);

    @media (max-width: 600px) {
      padding: ${({ theme }) => theme.spacings.medium};
    }
  }

  & > div:last-child {
    margin: 0 auto;
    padding-inline: ${({ theme }) => theme.spacings.large};
    max-width: 116rem;

    font-weight: 400;

    @media (max-width: 600px) {
      padding-inline: ${({ theme }) => theme.spacings.medium};
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
      font-size: 3.6rem;
    }

    @media (max-width: 300px) {
      font-size: 3.2rem;
    }
  }
`;
