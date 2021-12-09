export function NPER(
  rate: number,
  payment: number,
  present: number,
  future = 0,
  type = 0,
): number {
  const num = payment * (1 + rate * type) - future * rate;
  const den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
}

export function FV(
  rate: number,
  nper: number,
  pmt: number,
  pv: number,
  type: number,
): number {
  const pow = Math.pow(1 + rate, nper);

  const fv = rate
    ? (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow
    : -1 * (pv + pmt * nper);

  return fv;
}

export function PMT(ir: number, np: number, pv: number, fv = 0): number {
  const presentValueInterstFector = Math.pow(1 + ir, np);
  const pmt =
    (ir * pv * (presentValueInterstFector + fv)) /
    (presentValueInterstFector - 1);
  return pmt;
}

export function PMT2(ir: number, np: number, pv: number, fv = 0, type = 0) {
  let pmt;

  if (ir === 0) return -(pv + fv) / np;

  const pvif = Math.pow(1 + ir, np);
  pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt;
}
