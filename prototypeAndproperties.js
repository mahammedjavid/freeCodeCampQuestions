function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
console.log(beagle)

for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop)
    // console.log(ownProps)
  }else{
    prototypeProps.push(prop)
    // console.log(prototypeProps)

  }
}
beagle.hasOwnProperty("numLegs")