function startingConsonants(string) {
  let findString = string.toLowerCase().match(/[^aeiou ]/gi);
  // console.log(findString);
  findString.splice(1, 0, "s");
  findString.pop();
  return findString.join("");
}

function startingVowels(string) {
  let findString = string
    .toLowerCase()
    .match(/[aeiou]/gi)
    .join("");

  // console.log(findString);

  return findString;
}

function myString(string) {
  let myConsonant = startingConsonants(string);
  let myVowel = startingVowels(string);
  return (
    `Vowel Character : ${myVowel}` +
    "\n" +
    `Consonant Character: ${myConsonant}`
  );
}

console.log(myString("Sample Case"));
