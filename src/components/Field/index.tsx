/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Label } from './styled';
import { Input } from '../.';
import { useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Icons, Masks } from '../../domain';
import { currency, years, percent } from '../../utils/masks';

export type FieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  icon?: Icons;
  mask?: Masks;
  maxLength?: number;
  disabled: boolean;
  setValue: Dispatch<SetStateAction<any>>;
};

export default function Field({
  type = 'text',
  mask,
  setValue,
  ...props
}: FieldProps) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const masks = {
        currency,
        percent,
        years,
      };

      const value = mask ? masks[mask](e) : e.target.value;

      setValue(value);
    },
    [mask, setValue],
  );

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        maxLength={props.maxLength}
        icon={props.icon}
        id={props.name}
        name={props.name}
        type={type}
        value={props.value}
        disabled={props.disabled}
        onChange={handleChange}
      />
    </Container>
  );
}
