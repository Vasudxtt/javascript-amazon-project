import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite : formatCurrency',()=>{
  it('convert paise into INR', ()=>{
    expect(formatCurrency(2040)).toEqual('INR 20.40');
  });
   
  it('work with 0', () => {
    expect(formatCurrency(0)).toEqual('INR 0.00')
    });

    it("round up to the nearest ruppee" , ()=>{
      expect(formatCurrency(2000.5)).toEqual('INR 20.01');
    });
});