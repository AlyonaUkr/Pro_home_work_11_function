function generateKey(length, characters) {
  let newCharacters = '';

  for(let i = 0; i < length; i++){
    newCharacters += characters[Math.round(Math.random() * (characters.length - 1))];
  }
  return newCharacters;
}

console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));


