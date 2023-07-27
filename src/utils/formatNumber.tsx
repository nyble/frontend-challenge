export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(num/100);
}

export function formatInputNumber(num: number): string {
  return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(num);
}

export const convertToFloat = (str?: number | string, fallback = 0) => (
  parseFloat(str ? `${str}` : `${fallback}`) || fallback
);

export const bankersRound = (amount?: number | string, d = 2) => {
  //rounding to the nearest even number in case of a tie
  const n = convertToFloat(amount);
  const x = n * Math.pow(10, d);
  const r = Math.round(x);
  const br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r - 1) : r;

  return br / Math.pow(10, d);
};
