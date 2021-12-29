function fizzBuzz(start, end) {
  // Insert code here;
//this array will be filled and returned.  
let temp=[];
//constant strings that will be values used in filling the array
const fizz="Fizz";
const buzz="Buzz";
//for each element in between start and end....
for(start, i=0; start<=end; start++,i++)
{
  if((start%3==0)&&(start%5==0)){  //determine if the number is both a multiple of 3 and 5, if so, fill with fizzBuzz, continute
    temp[i] = fizz + buzz;
    continue;
  }
  else if(start%3==0){   //if number is only a multiple of 3, fill index with fizz, continue
    temp[i]=fizz;
    continue;
  }
  else if(start%5==0){  //if number is only a multiple of 5, fill index with buzz, continue
    temp[i]=buzz;
    continue;
  }
  else    //else just fill the index with the number
    temp[i]=start;
}

return temp;  //return

}

console.log(fizzBuzz(15,16));

// Do not edit this line;
module.exports = fizzBuzz;