import { InputHTMLAttributes } from 'react';
import { Container, Input, IconContainer } from './styled';
import { Icons } from '../../domain';

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: Icons;
};

export default function CustomInput(props: CustomInputProps) {
  const hasIcon = !!props.icon;
  return (
    <Container>
      {hasIcon && (
        <IconContainer>
          <span>{props.icon}</span>
        </IconContainer>
      )}
      <Input hasIcon={hasIcon} autoComplete="off" {...props} />
    </Container>
  );
}
