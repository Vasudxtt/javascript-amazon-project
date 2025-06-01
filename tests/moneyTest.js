import { formatCurrency } from "../scripts/utils/money.js";

// testing situtation is called test case
// group of related test cases is called test suite
console.log('test suite : formatCurrency');
// this test case is called basic test test case basically these are the test we do to check the code is working or not
console.log('converts paise into INR');
if(formatCurrency(2040) === 'INR 20.40'){
  console.log('passed');
} else{
  console.log('failed');
}
 // this test case is called edge test cases basically these are the test we do with tricky values
 console.log('works with zero');
if(formatCurrency(0) === 'INR 0.00'){
  console.log('passed');
} else{
  console.log('failed');
}

console.log('round up with the nearest values1');
if(formatCurrency(2000.5) === 'INR 20.01'){
  console.log('passed');
} else{
  console.log('failed');
}

console.log('round up with the nearest values2');
if(formatCurrency(2000.4) === 'INR 20.04'){
  console.log('passed');
} else{
  console.log('failed');
}