module.exports = function reverse (n) {
  n += '';
  let res = '';
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === '-') continue;
    res += n[i];
  }
  return res * 1;
}
