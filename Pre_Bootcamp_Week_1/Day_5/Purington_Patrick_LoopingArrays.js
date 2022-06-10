// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for( var i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var sum = 0
for (var i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
    console.log("The sum is " + sum + " and the index position within the array is " + i)
}
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > 5) {
        console.log(arr3[i]);
    }
}

// bonus
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > 5) {
        console.log(arr3[i]);
    }
    else if (arr3[i] <= 5) {
        arr3[i] = "No Dice"
    }
}
console.log(arr3);
