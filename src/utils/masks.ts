import { ChangeEvent } from 'react';

export function currency(e: ChangeEvent<HTMLInputElement>): string {
  const value = e.target.value;
  const newValue = value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');

  return newValue;
}

export function percent(e: ChangeEvent<HTMLInputElement>): string {
  const value = e.target.value;
  const newValue = value.replace(/\D/g, '').replace(/(\d)(\d{2})$/, '$1,$2');
  return newValue;
}

export function years(e: ChangeEvent<HTMLInputElement>): string {
  const value = e.target.value;
  const newValue = value.replace(/\D/g, '');
  return newValue;
}
