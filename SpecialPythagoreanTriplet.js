/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc

*/

// a + b = 1000 - c => a + b < 1000
// try all a and b pairs until it meet the condition
// a <= 333
// iterate a, since b < c, b < Math.floor((1000 - a) / 2)

var findPyth = (sum = 1000) => {
  var a, b, c;
  for (a = 1; a <= 333; a ++) {
    for (b = a + 1; b <= Math.floor((1000 - a) / 2); b ++) {
      c = sum - a - b;
      if (a ** 2 + b ** 2 === c ** 2) {
        console.log(a, b, c);
        // console.log(a ** 2);
        // console.log(b ** 2);
        // console.log(c ** 2);        
        return a * b * c;
      }
    }
  }
}
console.log(findPyth())




