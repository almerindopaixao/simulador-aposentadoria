import { Container, Label } from './styled';
import { Input } from '../.';

export type FieldProps = {
  title: string;
};

export default function Field(props: FieldProps) {
  return (
    <Container>
      <Label>{props.title}</Label>
      <Input />
    </Container>
  );
}
