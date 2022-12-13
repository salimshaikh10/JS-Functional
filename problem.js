const words = ['apple', 'ball', 'cat', 'dog', 'elephant'];

function separate(arr) {
  // Write your code here.
  return {
    even: ['ball', 'elephant'],
    odd: ['apple', 'cat', 'dog'],
  };
}

const result = separate(words);

console.log('Number of even words is 2', result.even.length === 2);
console.log('Number of odd words is 3', result.odd.length === 3);
