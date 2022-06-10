var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}

// var arr - ['up', 'you', 'give', 'to', 'going', 'never']
// var i = 5
//console.log will be the following....."never", "going", "to", "give", "you", "up"

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var sum = 0
// var i = 1
// console.log will be the following....arr[1] = 2, sum = 2, arr[3] = 4, sum = 6, arr[5] = 6, sum = 12, arr[7] = 8, sum = 20, arr[9] = 10, sum = 30

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}

// var arr = [8, 2, 0, 6, 12, 4, 3]
// var i = 0
// if i < 7; i++
    // if arr[i] >= 6...console.log true
// console log will be......true, true, true