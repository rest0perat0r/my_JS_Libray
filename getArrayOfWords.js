function getWord(len) {
  let word = "";
  for (let i = 0; i < len; i++) {
    let ran = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    let letter = String.fromCharCode(ran);
    i == 0 ? (letter = letter.toUpperCase()) : letter;
    word += letter;
  }
  return word;
}

function getArrayOfWords(lengthOfArray, lengthOfWords) {
  let words = [];
  for (let i = 0; i < lengthOfArray; i++) {
    words.push(getWord(lengthOfWords));
  }
  return words;
}

const names = getArrayOfWords(5, 8);
console.log(names);
