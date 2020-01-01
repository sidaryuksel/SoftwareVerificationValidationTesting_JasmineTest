const MergeSort = require('../src/MergeSort');

describe("MergeSort", function() {
  var result;
    it("MergeSort algoritmasıyla verilen array'in küçükten büyüğe doğru dizilimi", function() {
      result = MergeSort.getResult([5,4,8,2,8]);
      expect(result).toEqual([2,4,5,8,8]);
    });
  
    it("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function() {
      result = MergeSort.getResult([34,23,23,1,2,46,6,7,98,65,5,4,3,45,41,89,76,3,4,5,72]);
      expect(result).toEqual([1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 23, 23, 34, 41, 45, 46, 65, 72, 76, 89, 98]);
    });
    
    it("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function() {
      result = MergeSort.getResult(['kalem','silgi','defter','kalem traş','parşomen kağıdı', 'çanta', 'boya kalemi']);
      expect(result).toEqual(["boya kalemi", "defter", "kalem", "kalem traş", "parşomen kağıdı", "silgi", "çanta"]);
    });

  });