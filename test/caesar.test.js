// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar")

describe("caesar", () =>{
    it("should return 'false' if the shift is over 25", ()=>{
        const expected = false;
        const actual = caesar("dog", 26)
        expect(actual).to.eql(expected)
    })
    it("should return 'false' if the shift is below -25", ()=>{
        const expected = false;
        const actual = caesar("dog", -26)
        expect(actual).to.eql(expected)
    })
    it("should return 'false' if the shift is 0", ()=>{
        const expected = false;
        const actual = caesar("dog", 0)
        expect(actual).to.eql(expected)
    })
    it("ignores capital letters when decoding", () =>{
        const expected = "thinkful"
        const actual = caesar("WKLQNIXO", 3, false)
        expect(actual).to.eql(expected)
    })
    it("should wrap arround to the begging of the alphabet if the shift pushes letters past the value of z (decoding)",()=>{
        const expected = "aaa"
        const actual = caesar("zzz", -1, false)
        expect(actual).to.eql(expected)
    })
    it("should wrap arround to the end of the alphabet if the shift pushes letters past the value of a (decoding)",()=>{
        const expected = "zzz"
        const actual = caesar("aaa", 1, false)
        expect(actual).to.eql(expected)
    })
    it("maintains spaces and other nonalphabetic symbols in the message before and after decoding", () => {
        const expected = "think ful!"
        const actual = caesar("wklqn ixo!", 3, false)
        expect(actual).to.eql(expected)
    })
    it("should translate an ecoded message if 'encoded' is set to true (default)",()=>{
        const expected = "thinkful"
        const actual = caesar("wklqnixo", 3, false)
        expect(actual).to.eql(expected)
    })
})