export const money = (x: number, withCurrency: boolean = true) => {
  return (withCurrency
    ? `IDR `
    : ``) +
        (Math.round(x) || 0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.') ;
};
