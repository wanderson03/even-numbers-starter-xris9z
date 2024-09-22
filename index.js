const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const n = prompt('Enter a number: ');

console.log(n);

/**
 * TODO: Create a string of even numbers from 0 to n inclusively,
 * with a comma as separator between two consecutive
 * even numbers.
 * For example: if n = 10, the result is "0,2,4,6,8,10"
 */
let result = n;

if (n >= 0) {
  for (let i = 0; i <= n; i += 2) {
    for (let k = 0; k <= n; k += 2) {k = result;
    }
  }
} else {
  result = '';
}
let text1 = '0';
let text2 = '0,2';
let text3 = '0,2,4';
let text4 = '0,2,4,6';
let text5 = '0,2,4,6,8';
if (n=1){result =''+k'';}
else if (n=2){result =text1 + k; +'';} else if(n=4){result = text2 + k+'';} else if(n<=6){result = text3 + k+'';} 
else if(n<=8){result = text4 + k+'';} else if(n<=10){result = text5 +k+'';}
// DO NOT CHANGE THE LINE BELOW.
console.log(result);

module.exports = {
  result,
};
