// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const letterValues ={
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  }
  const valueLetters = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  }

  function polybius(input, encode = true) {
    // your solution code here
    //change input to lower case
    const lowerInput = input.toLowerCase()
    //create splitInput (which can be either an array or a string)
    let splitInput;
    //splits input into individual words if there is a space in it
    if (lowerInput.includes(" ")){
      splitInput = lowerInput.split(" ")
    } else {
      //defines splitInput as lowerInput if there are no spaces
      splitInput = lowerInput;
    }
    //checks to see if splitInput is an array (is true if it is an array)
    const splitInputCheck = Array.isArray(splitInput);
    //if it is decoding
    if (encode === false){
      //if it is an array
      if(splitInputCheck === true){
        //loop the array
        for(let i = 0; i<splitInput.length; i++){
          const word = splitInput[i];
          //check if there are an even number of numbers in each word
          const result = (word.length % 2 == 0 ) ? "even":"odd";
          //if there is an odd number, return false
          if(result === "odd"){
            return false
          }
        }
      } else {
          const result = (splitInput.length % 2 == 0 ) ? "even":"odd";
          if(result === "odd"){
            return false
          }
        }
    }
    //make a storage array for the number pairs
    const pairArray = [];
    //make a storage array for letters (and spaces if need be)
    const lettersArray = [];
    //create a storage array for number pairs (and spaces if need be)
    const numbersArray = [];
    //if decoding
    if(encode === false){
      //loop slpitInput
      for(let i = 0; i<splitInput.length; i++){
        //if splitInput is an array
        if(splitInputCheck === true){
          //loop each word, but by twos
          const word = splitInput[i]
          for (let j = 0; j<word.length; j += 2){
            //push substrings of 2 numbers to the pairArray
            pairArray.push(word.substr(j, 2))
            //push a space between each word before the loop resets
            if (!pairArray.includes(" ")){
              if(pairArray.length === splitInput[i].length/2){
                pairArray.push(" ")
              }
            }
            
          }
          
        } else {
          //if there is no space, loop the string and push the pairs to pairArray
          for (let j =0; j < splitInput.length; j += 2){
            if(pairArray.length === (splitInput.length/2)){
              break
            } else {
              pairArray.push(splitInput.substr(j, 2))
            }
          }
        }
      }
      //loop pairArray 
      for (let i =0; i<pairArray.length; i++){
        let numPair = pairArray[i]
        //check to make sure pairArray has numbers in it
        if(numPair === " "){
          //push the value (a letter) stored at the number pair in the valueLetters object to the lettersArray
          lettersArray.push(" ")
        } else {
          //if it is not a number, push it to the lettersArray (because it should be a space)
         lettersArray.push(valueLetters[numPair])
        }
      }
    } else{
      //if splitInput is an array
      if(splitInputCheck === true){
        //loop splitInput
        for(let i =0;i<splitInput.length; i++){
          const word = splitInput[i];
          //loop each word in pairArray
          for (let j =0; j<word.length; j++){
            let letter = word[j]
            //push each number pair (representing a letter) to numbersArray
            numbersArray.push(letterValues[letter])
          }
          if(splitInput.length> i+1){numbersArray.push(" ")}
          console.log(numbersArray)
        }
        //if the string does not include spaces
      } else {
        //loop splitInput
        for(let i =0;i<splitInput.length; i++){
          let letter = splitInput[i];
          //push each number pair (representing a letter) to the numbers array
          numbersArray.push(letterValues[letter])
          console.log(numbersArray)
        }
      }

    }
   if (encode === false){
     let output = lettersArray.join("");
     return output
   } else {
     let output = numbersArray.join("");
     return output
   }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
