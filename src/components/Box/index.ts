import styled, { css } from 'styled-components';

export type BoxProps = {
  marginTop?: string;
  marginBlock?: string;
  minHeight?: string;
};

export default styled.section<BoxProps>`
  ${(props) => css`
    background-color: white;
    width: 100%;
    padding: ${props.theme.spacings.large};
    border-radius: 10px;
    margin-top: ${props.marginTop};
    margin-block: ${props.marginBlock};
    min-height: ${props.minHeight};

    ${props.minHeight &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  `}
`;
