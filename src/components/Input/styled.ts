import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 100%;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  margin-top: 8px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  height: 46px;
  padding: 0 24px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
