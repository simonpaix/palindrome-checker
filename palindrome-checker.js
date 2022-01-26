function palindrome(str) {
  let normStr=str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  console.log(normStr);
  return normStr === normStr.split('').reverse().join('');
}