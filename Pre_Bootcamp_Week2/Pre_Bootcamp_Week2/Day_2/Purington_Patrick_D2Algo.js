//I want to log even numbers into 1 array, and odd numbers into another. start at 1 and end at 100. How to do this?

var arrayeven = [];
var arrayodd = [];
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arrayeven.push(i)
    }
    else {
        arrayodd.push(i)
    }
}
console.log(arrayeven);
console.log("**************Even Above ***********")
console.log(arrayodd);
console.log("****************Odd Above*******")

var randomNums = [10,4,2,0,11,8,2,3]
var secondNum = randomNums[1];
for (let i = 0; i < randomNums.length; i++) {
    if (randomNums[i] > secondNum) {
        console.log(randomNums[i])
    }
}