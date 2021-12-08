import styled from 'styled-components';

export type InputProps = {
  hasIcon: boolean;
};
export const IconContainer = styled.div`
  background: #f5f8fa;
  border-right: 1px solid #d3e2e5;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0 0 10px;
  width: 5.5rem;

  span {
    display: block;
    font-size: 1.6rem;
  }
`;

export const Input = styled.input<InputProps>`
  width: ${({ hasIcon }) => (hasIcon ? 'calc(100% - 5.5rem)' : '100%')};
  border-radius: ${({ hasIcon }) => (hasIcon ? '0 10px 10px 0' : '10px')};
  border: none;
  outline: none;
  height: 46px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 20px;
  font-size: 1.8rem;

  &:disabled {
    color: #114b5f;
    font-weight: bold;
    font-size: 2rem;
    background: #f5f8fa;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d3e2e5;
  margin-top: 8px;
  border-radius: 10px;
  width: 100%;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
