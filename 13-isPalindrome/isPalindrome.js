function isPalindrome(word) {
  // Insert code here;
  let len = word.length;
  let mid = Math.floor(len/2);
  for(let i=0;i<mid;i++){
    if(word[i] !== word[len-1-i]){
      return false;
    }
  }
  return true;
}


console.log(isPalindrome("racecar"));

// Do not edit this line;
module.exports = isPalindrome;