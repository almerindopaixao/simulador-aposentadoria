import styled from 'styled-components';

export const GridLayout = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: ${({ theme }) => theme.spacings.large};

  @media (max-width: 800px) {
    grid-template-columns: none;
  }
`;
