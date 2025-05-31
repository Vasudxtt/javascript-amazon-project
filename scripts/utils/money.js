export function formatCurrency(priceCents){
  return `INR ${(priceCents/100).toFixed(2)}`;
}