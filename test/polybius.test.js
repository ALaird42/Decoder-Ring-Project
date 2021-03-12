// Write your tests here!
const expect = require("chai").expect
const polybius = require("../src/polybius")

describe("polybius- user tests", () =>{
    it("should translate both the letters i and j to 42 when encoding", () =>{
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.eql(expected)
    })
    it("should translate 42 into i/j when decoding",() => {
        const expected = "(i/j)"
        const actual = polybius("42", false)
        expect(actual).to.eql(expected)
    })
    it("should ignore capital letters",() => {
        const expected = "4432423352125413"
        const actual = polybius("THINKFUL")
        expect(actual).to.eql(expected)
    })
    it("should maintain spaces in the message after encoding", () =>{
        const expected = "4432423352 125413"
        const actual = polybius("think ful")
        expect(actual).to.eql(expected)
    })
    it("should maintain spaces in the message after decoding",() =>{
        const expected = "th(i/j)nk ful"
        const actual = polybius("4432423352 125413", false)
        expect(actual).to.eql(expected)
    })
})