class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let arr=Array.from(nums); //Create an array from an iterable object
    var first=0;
    let midIndex =Math.floor(arr.length/2); //find the index of the middle
    let last = arr.length-1;

    if(target==arr[mid]){
      return true;
    }//if the target is less than mid, the target is within the left half.
    else if (target <arr[mid]){
      arr = arr.splice(first,mid); //splica the array from 0 to mid then search
      return this.binarySearch(arr, target);
    }
    else if(target > arr[mid]){ 
      arr= arr.splice(mid+1,last); //splice array from mid+1 to the last index, the search
      return this.binarySearch(arr, target);
    }
    return false; 
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;