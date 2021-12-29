function frequencyCounter(word) {
  // Insert code here;
  let keys={};

  for(var i=0; i < word.length; i++){
    if(keys[word[i]]){ 
      keys[word[i]]+=1;  //it already exists
    }

    //this means it doesnt exist, therefore initialize it to the first 1.
    else
       keys[word[i]]=1;
  
  }
  return keys;
}

console.log(frequencyCounter("train"));

// Do not edit this line;
module.exports = frequencyCounter;