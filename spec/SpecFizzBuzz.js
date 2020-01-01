const FizzBuzz = require('../src/FizzBuzz');

describe("FizzBuzz", function() {
  var result;
    it("Should return fizz for multiples of three", function() {
      result = FizzBuzz.getResult(3);
      expect(result).toEqual('fizz');
    });

    it("Should return buzz for multiples of five", function() {
     result = FizzBuzz.getResult(5);
      expect(result).toEqual('buzz');
    });

    it("Should return fizzbuzz for multiples of five&three", function() {
      result = FizzBuzz.getResult(15);
      expect(result).toEqual('fizzbuzz');
    });

    it("Should return the value for not-multiples of three&five", function() {
      result = FizzBuzz.getResult(8);
      expect(result).toEqual('8');
    });

    it("Should return error message for zero", function() {
      result = FizzBuzz.getResult(0);
      expect(result).toEqual('1-100 arası tamsayı değer girilmeli!');
    });

    it("Should return error message for string variable 'Kalem al'", function() {
      result = FizzBuzz.getResult('Kalem al');
      expect(result).toEqual('1-100 arası tamsayı değer girilmeli!');
    });
    //sayıyı tam sayı değerine yuvarlıyor. aşağıdaki 5e yuvarladı
    it("Should return 5.695 ", function() {
      result = FizzBuzz.getResult(5.695);
      expect(result).toEqual('5.695');
    });

    //negatif değer testi
    it("Should return error message for -5", function() {
      result = FizzBuzz.getResult(-5);
      expect(result).toEqual('1-100 arası tamsayı değer girilmeli!');
    });
  });