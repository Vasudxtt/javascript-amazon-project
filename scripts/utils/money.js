export function formatCurrency(priceCents){
  return `INR ${(Math.round(priceCents)/100).toFixed(2)}`;
}