export const money = (x: number, withCurrency: boolean = false) => {
  return (
    (withCurrency ? `IDR ` : ``) +
    (Math.round(x) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  );
};

export const moneyFontSize = (x: number) => {
  if (x > 999999999) {
    return 18;
  }

  if (x > 99999999) {
    return 20;
  }

  return 22;
};
