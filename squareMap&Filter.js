const squareList = arr => {
  var newArr = [...arr]
  var a = newArr.filter((num)=>num%1==0 & num>0).map((c)=>c*c)
  return a
  return arr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
