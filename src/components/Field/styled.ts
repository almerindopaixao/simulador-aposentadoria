import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  line-height: 24px;
`;
