// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  for(let i =0;i<s.length;i++){
    if(s[i]%2==1){
      newArray.push(s[i])
    }
  }

  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});