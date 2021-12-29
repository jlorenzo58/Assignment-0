class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num<=1){  //base case
      return 1;
    }
    else{
        return num + this.countDownSum(num-1);
    }
  }
}

let studentSolution = new MySolution();
console.log(studentSolution.countDownSum(5));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;