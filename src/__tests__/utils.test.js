// Your tests here
// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t=2, e=1, s=2, t=2 => 7
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("calculates correctly with only vowels", () => {
    const word = "aeiou";
    const points = pointsForWord(word);
    expect(points).toBe(5);
  });

  it("calculates correctly with only consonants", () => {
    const word = "bcdfg";
    const points = pointsForWord(word);
    expect(points).toBe(10); // 5 consonants * 2 = 10
  });

  it("treats non-letters as consonants", () => {
    const word = "a!e"; // a=1, !=2, e=1
    const points = pointsForWord(word);
    expect(points).toBe(4);
  });
});
