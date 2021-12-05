function NPER(rate, payment, present, future, type) {
  // Initialize type
  var type = typeof type === 'undefined' ? 0 : type;

  // Initialize future value
  var future = typeof future === 'undefined' ? 0 : future;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
}

function FV(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper),
    fv;
  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
}

function PMT(ir, np, pv, fv = 0) {
  var presentValueInterstFector = Math.pow(1 + ir, np);
  var pmt =
    (ir * pv * (presentValueInterstFector + fv)) /
    (presentValueInterstFector - 1);
  return pmt;
}

function PMT2(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return pmt;
}
