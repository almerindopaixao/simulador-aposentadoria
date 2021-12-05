import styled from 'styled-components';

export type BoxProps = {
  marginTop?: string;
  marginBlock?: string;
};

export default styled.section<BoxProps>`
  background-color: white;
  width: 100%;
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: 10px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-block: ${({ marginBlock }) => marginBlock};
`;
