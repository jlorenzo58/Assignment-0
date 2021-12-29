function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var product = 1;
  for(let i=0;i<args.length;i++){
     product *= args[i];
  }
  return product;
}

console.log(productOfAnyAmountOfNumbers(10,11,12,13,14,15));

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;