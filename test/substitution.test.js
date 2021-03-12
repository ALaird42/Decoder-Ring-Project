// Write your tests here!
const expect = require("chai").expect
const substitution = require("../src/substitution")

describe("substitution- user tests", () =>{
  it("should return false if the alphabet isn't exactly 26 characters long",() => {
      const expected = false
      const actual = substitution("dog", "vdfa")
      expect(actual).to.eql(false)
  })  
  it("should correctly translate the given phrase, based on the alphabet given to the function",() => {
      const expected = "jrufscpw"
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.eql(expected)
  })
  it("returns false if there are any duplicate characters in the given alphabet", () => {
      const expected = false
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      expect(actual).to.eql(expected)
  })
  it("maintains spaces in the message, before and after encoding", () =>{
      const expected = "jrufs cpw"
      const actual = substitution("think ful", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.eql(expected)
  })
  it("maintains spaces in the message, before and after decoding", () =>{
        const expected = "think ful"
        const actual = substitution("jrufs cpw", "xoyqmcgrukswaflnthdjpzibev", false)
        expect(actual).to.eql(expected)
    })
    it("ignores capital letters", () =>{
        const expected = "thinkful"
        const actual = substitution("JRUFSCPW", "xoyqmcgrukswaflnthdjpzibev", false)
        expect(actual).to.eql(expected)
    })

})