
//Given an array of five values, calculate the average star rating, rounded to
// two decimal places. The array contains user votes per star, so the first element
// [0] contains the number of 1-star ratings and the last element [4] , the
// number of 5-star ratings.
// Return the average score in [brackets], followed by a space and asterisks' * to represent
// the star rating, rounded to the nearest whole star.

let array = [55, 67, 98, 115, 61];

function starRating(arr){
    let firstSum = array.reduce((acc,current) => acc + current);
    let newArr = array.map((item,index) => item*(index+1));
    let totalSum = newArr.reduce((acc,current) => acc + current);
    let starAvg = (totalSum/firstSum).toFixed(2);
    let roundedNum =  [parseInt((totalSum/firstSum).toFixed(2))];
    return `"${starAvg} ${"".padStart(roundedNum,"*")}"`;
}
console.log(starRating(array));


