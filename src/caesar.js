// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    //return false of shift is outside alphabeitcal paramiter
    if (shift < -25 || shift > 25 || shift === 0){
      return false
    }
    //change input to lower case
    const inputLower = input.toLowerCase()
    // create an object where the keys are the letters of the alphabet and the values are 0 -25
    const alphabetValues ={
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12, 
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22, 
      x: 23,
      y: 24,
      z: 25
    }
    // make an alphabet array that will be refreneced using the values stored in the object as indexes
    const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // establish storage vairable to be returned
    let returnStringArray =[];
    // loop over inputLower string
    for (let i = 0; i<inputLower.length; i++){
      let stringLetter = inputLower[i];
      let stringLetterValue = alphabetValues[stringLetter];
      let shiftedStringLetterValue; 
      if (encode === false){
        shiftedStringLetterValue = stringLetterValue - shift
      } else {
        shiftedStringLetterValue = stringLetterValue + shift
      }
      //wrap alphabet to beginning or end if shift pushes it higher than 25 or lower than 0 
      if (shiftedStringLetterValue > 25) {shiftedStringLetterValue -= 26};
      if (shiftedStringLetterValue < 0) {shiftedStringLetterValue += 26};
      //sepparate code based on if input is being encoded or decoded (decoding is encode === false)
      if (encode === false){
        // use if else to differentiate between letters and non letters
        if (alphabetArray.includes(stringLetter)){
          //use shiftedStringLetterVlaue as the index of the aphabetArray and add it to the the string storage variable (returnString)
          returnStringArray.push(alphabetArray[shiftedStringLetterValue])
        } else {
          //add non letter characters to the return string
          returnStringArray.push(`${stringLetter}`)
        }
      } else {
        if (alphabetArray.includes(stringLetter)){
          //use shiftedStringLetterValue as the index of the aphabetArray and add it to the the string storage variable (returnString)
          returnStringArray.push(alphabetArray[shiftedStringLetterValue])
        } else {
          //add non letter characters to the return string
          returnStringArray.push(`${stringLetter}`)
        }
      }
    }
    const returnString = returnStringArray.join('')
    return returnString
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
