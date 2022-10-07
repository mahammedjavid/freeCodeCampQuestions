// Curring

function add(x) {
  return function(y){
    return function(z){
      return x+y+z
    }
  }

}
console.log(add(10)(20)(30))

add(10)(20)(30);

// Bind

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

