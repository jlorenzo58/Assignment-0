function titleCaseEdit(title) {
  // Insert code here;

  //split into words to manipulate each word individually.
  const words = title.split(" ");
  
  //will be returned as the updated title
  var update="";

  //loop through the words 
  for(let i=0; i< words.length;i++){
    //capatalize each first letter, then push the new word into the updated title
    words[i]=words[i][0].toUpperCase()+words[i].substr(1);
    update += words[i] + " ";
  }
  //to obey the "it should return a string of the same length as the input title"
  update=update.slice(0,-1);

  //return
  return update;
}

console.log(titleCaseEdit("here comes the sun"));

// Do not edit this line;
module.exports = titleCaseEdit;