// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
    if(number === 0){
      return 0;
    }
    if(!number || typeof(number)!=="number"){
      return -1;
    }
    let sum = 0;
    let currentNumbers = [];
    for (let index = 1; index < number; index++) {
      if (index%3===0 || index%5===0){
        if (!currentNumbers.includes(index)){
          currentNumbers.push(index);
          sum = sum+index;        }
      }
      
    }

    return sum;

}

module.exports = solution;
