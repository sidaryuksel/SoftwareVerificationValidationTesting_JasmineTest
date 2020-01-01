const UcgenAlani = require('../src/UcgenAlani');

describe("UcgenAlani", function () {
  var result;
  it("Taban:3 Yukseklik:8, alan 12 olmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(3, 8);
    expect(result).toEqual(12);
  });
  it("Taban:4 Yukseklik:-5, alan 12 olmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(4, -8);
    expect(result).toEqual('Taban ve Yukseklik sıfırdan küçük olamaz!');
  });
  it("Taban:-4 Yukseklik:5, hata mesajı alınmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(-4, 8);
    expect(result).toEqual('Taban ve Yukseklik sıfırdan küçük olamaz!');
  });
});
