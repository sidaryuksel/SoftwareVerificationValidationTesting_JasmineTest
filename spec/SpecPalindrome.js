const Palindrome = require('../src/Palindrome');

describe("Palindrom", function () {
    var result;
    it("A man, a plan, a canal. Panama", function () {
        result = Palindrome.palindromeBul('A man, a plan, a canal. Panama');
        expect(result).toEqual(true);
    });

    it("Ey Edip Adana'da pide ye", function () {
        result = Palindrome.palindromeBul("Ey Edip Adana'da pide ye");
        expect(result).toEqual(true);
    });
    it("12 345 678 9 0 9 8765 4321", function () {
        result = Palindrome.palindromeBul("12 345 678 9 0 9 8765 4321");
        expect(result).toEqual(true);
    });

    it("kızım okulda neler yapmış", function () {
        result = Palindrome.palindromeBul("bc");
        expect(result).toEqual(false);
    });
    it("123456789", function () {
        result = Palindrome.palindromeBul("123456789");
        expect(result).toEqual(false);
    });
});
