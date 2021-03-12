// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // return false if no alphabet
    if (!alphabet){return false}
    //return false of alphabet is less than 26 characters
    if (alphabet.length < 26){return false}
    //check for duplicate characters in alphabet argument
    const alphabetArray = []
    for(let i =0; i<alphabet.length; i++){
      let character = alphabet[i]
      if (alphabetArray.includes(character)){
        return false
      } else {
        alphabetArray.push(character)
      }
    }
    const lowerInput = input.toLowerCase()
    const lowerAlpha = alphabet.toLowerCase()
    //establish normal alphabet
    const normLetters = "abcdefghijklmnopqrstuvwxyz"
    //establish variable to be returned
    let returnString;
    //construct storage array for decoded letters
    const decodedArray = []
    const encodedArray =[]
    const inputArray =[]
    //if decoding
    if (encode === false){
      //loop the lowerInput and write the letters to an array
      for(let i =0; i<lowerInput.length; i++){
        inputArray.push(lowerInput[i])
      }
      //for each character in the inputArray
      inputArray.forEach(character =>{
        if(lowerAlpha.includes(character)){
          //loop lowerAlpha
          for(let i =0; i<lowerAlpha.length; i++){
            //if the characer in inputArray matches a character in lowerApha
            if (character === lowerAlpha[i]){
              //push the letter from normLetters that corresponds to the matching index in lowerAplphabetArray
              decodedArray.push(normLetters[i]);
            }
          }
          //if character is not present in the alphabet (hopefully being a space or punctuation)
        } else {
          //push character directly to the array
          decodedArray.push(character)
        }
        //return if all characters have been either decoded and pushed, or just pushed
        if (decodedArray.length === input.length) {return}
      })
      //if encoding
    } else {
      for(let i =0; i<lowerInput.length; i++){
        inputArray.push(lowerInput[i])
      }
      //for each character in the inputArray
      inputArray.forEach(character =>{
        if(normLetters.includes(character)){
          //loop normLetters
          for(let i =0; i<normLetters.length; i++){
            //of the character is in normLetters
            if(character === normLetters[i])
            //push the lowerAplpha letter at the corresponding index to encodedArray
              encodedArray.push(lowerAlpha[i])
          }
          //if character is not present in normLetters (hopefully being a space or punctuation)
        } else {
          //push the character directly to the encodedArray
          encodedArray.push(character)
        }
      })
    }
    //if there is something in decodedArray
    if(decodedArray.length){
      //it is decoding, and you join what is in the decodedArray and assign it to the returnString variable
      returnString = decodedArray.join("")
      //if there is nothing in the decoded array
    } else {
      //it is encoding, and you should join what is in encodedArray and assign it to the returnString variable
      returnString = encodedArray.join("")
    }
    return returnString
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
