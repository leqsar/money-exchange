// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let change = {};
  let e ="You are rich, my friend! We don't have so much coins for exchange";
  if (currency > 9999) {
    change.error = e;
    currency = 0;
  }
  if (currency >= 50) {
    let m = Math.floor(currency/50);
    currency = currency - 50*m;
    if(m !== 0)change.H = m;
    m = 0;
  }
  if (currency >= 25) {
    let m = Math.floor(currency/25);
    currency = currency - 25*m;
    if(m !== 0)change.Q = m;
    m = 0;
  }
  if (currency >= 10) {
    let m = Math.floor(currency/10);
    currency = currency - 10*m;
    if(m !== 0)change.D = m;
    m = 0;
  }
  if (currency >= 5) {
    let m = Math.floor(currency/5);
    currency = currency - 5*m;
    if(m !== 0)change.N = m;
    m = 0;
  }
  if (currency >= 1) {
    let m = Math.floor(currency/1);
    currency = currency - 1*m;
    if(m !== 0)change.P = m;
    m = 0;
  }
  return change;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
