import styled from 'styled-components';

export type ContentProps = {
  marginTop?: string;
  marginBottom?: string;
  marginBlock?: string;
};

export default styled.section<ContentProps>`
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-block: ${({ marginBlock }) => marginBlock};

  ol {
    list-style: none;
    counter-reset: my-list-counter;
    margin-left: 25px;
    margin-bottom: 40px;
    padding-left: 0;

    li {
      position: relative;
      margin-bottom: 20px;
      padding-left: 35px;
      min-height: inherit;
      word-break: inherit;
      counter-increment: my-list-counter;

      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    li::before {
      position: absolute;
      top: 6px;
      left: 0;
      content: counter(my-list-counter);
      color: #fff;
      width: 25px;
      height: 25px;
      font-weight: 700;
      border-radius: 50%;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      box-sizing: border-box;
      font-size: 15px;
      padding-top: 1px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
