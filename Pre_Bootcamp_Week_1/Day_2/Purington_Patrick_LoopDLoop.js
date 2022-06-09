
// repetetive task with an outcome
//starting point would be mile 0 or mile 1 depending on how exactly you write the loop
//loop should stop at mile 6 as no more candy is dispensed after
//once the loop reaches mile 6 it will automatically
//2 miles
//variables will be miles run

for (var x = 0; x <= 6; x++) { //first option I could think of due to brain fart
    if (x == 2) {
        console.log("here's your candy")
    } 
    else if (x == 4) {
        console.log("here's your candy")
    }
    else if (x == 6) {
        console.log("here's your candy")
    }
    else {
        console.log("keep on running")
    }
}

for (var x = 0; x <= 6; x++) { // another for loop option
    if (x % 2 == 0) {
        console.log("here's some candy")
    }
    else {
        console.log("keep on going")
    }
}

//Stretch challenge: add in 5.5 mph minimum
var x = 0; // x represents mile ran
var speed = 6; // should be undefined...needs input from treadmill user... for the code to run will set to 6.0 for the time being
for (var x = 0; x <= 6; x++) {
    if(x % 2 == 0 && speed >= 5.5 && x != 0) {
        console.log(`you are at  mile ${x} and have ${x / 2} peicies of candy`)
    }
    else {
        console.log("keep on running")
    }
}

// while loop practice
var x = 0 // x = miles
var s = 6 //s = speed
while( x <= 6) {
    if (x % 2 == 0 && s > 5.5 && x != 0) {
    console.log("here's your candy")
    }
    else {
        console.log("keep going")
    }
    x++
}