export function currency(value: string): string {
  const newValue = value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
    .replace(/^0+/, '');

  return newValue;
}

export function unmakedCurrency(value: string): number {
  const newValue = value.replace(/\./g, '').replace(/,/g, '.');
  return Number(newValue);
}

export function percent(value: string): string {
  const newValue = value.replace(/\D/g, '').replace(/(\d)(\d{2})$/, '$1,$2');
  return newValue;
}

export function unmakedPercent(value: string): number {
  const newValue = value.replace(/^0+/, '').replace(/,/g, '.');
  return Number(newValue);
}

export function years(value: string): string {
  const newValue = value.replace(/\D/g, '').replace(/^0+/, '');
  return newValue;
}
