

// Create a function that takes in an array and returns an array of the accumulating
// sum:


function accSumArr(numArr) {
    let result = 0;
    return numArr.map(x => result += x);
};

console.log(accSumArr([1, 2, 3, 4]));

