// every()

function checkPositive(arr) {
  return arr.every(a => a>0)
}

checkPositive([1, 2, 3, -4, 5]);

// some()
function checkPositive(arr) {
  console.log(arr.some(a=> a>0))
}

checkPositive([1, 2, 3, -4, 5]);