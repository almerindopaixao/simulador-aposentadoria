import { Form } from './styled';

export type FormProps = {
  children: React.ReactNode;
  legend: string;
};

export default function CustomForm({ children, legend }: FormProps) {
  return (
    <Form>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </Form>
  );
}
