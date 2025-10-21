const input = process.argv[2];


if (!input) {
  console.log('Please provide a word or sentence as an argument');
  process.exit(1);
}


function makeWordDisco(word) {

  const mid = Math.ceil(word.length / 2);


  const firstHalf = word.slice(0, mid);
  const secondHalf = word.slice(mid);


  return secondHalf + firstHalf;
}


const result = input
  .split(' ')
  .map(makeWordDisco)
  .join(' ');


console.log(result);