var heightReq = 42; //required height for ride is 42 inches or higher
var ageReq = 10; //required age for ride is 10 years old or older
var userHeight; //user input for rider's height, undefined, will be used upon input to determine if they can ride
var userAge; //user input for rider's age, undefined, will be used upon input to determine if they can ride

function doYouGetToRide(userHeight, userAge) { //to determine if user's height and age meet the ride req's & Stretch 1 feature

    if(userHeight >= heightReq && userAge > ageReq) {
        console.log("Get on that ride kiddo!"); //you are tall enough and old enough to ride
        console.log("from line 13 jsvariables"); //ensure function works
    }
    else {
        console.log("Sorry, kiddo. Maybe next year."); //you are to short and too young to ride
        console.log("from line 18 jsvariables"); //ensure function works
    }
}

doYouGetToRide(43, 11); //ride on
doYouGetToRide(39, 10); //not quite
doYouGetToRide(55,9); //not quite

function doYouGetToRideAgain(userHeight, userAge) { //stretch 2 feature
    if (userHeight >= heightReq || userAge > ageReq) { //either age or height req's are met to ride
        console.log("Get on that ride kiddo!"); //you meet one of the req's to ride
        console.log("inside 1st if statement line 23 jsvariable"); //ensure function is working
    }
    else {
        console.log("Sorry, Kiddo. Maybe next year"); //you do not meet either req for riding
        console.log("inside else statement line 28 jsvariable"); //ensure function is working
    }
}

doYouGetToRideAgain(43,8); //ride on
doYouGetToRideAgain(40,7); //not quite
doYouGetToRideAgain(39,11); //ride on