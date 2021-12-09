import styled from 'styled-components';

export const Form = styled.form`
  fieldset {
    border: 0;
  }

  legend {
    width: 100%;

    font-size: ${({ theme }) => theme.font.sizes.superLarge};
    line-height: 34px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;

    margin-bottom: 40px;

    @media (max-width: 500px) {
      font-size: 2.8rem;
    }
  }
`;
