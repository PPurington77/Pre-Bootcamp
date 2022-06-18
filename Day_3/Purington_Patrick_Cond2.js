// if I finish my homework and....
    //it before 10am I want a latte
    //its between 10 and 4 I want a hot chocolate
    //it between 4 and 10pm I want Ice Cream
    //after 10 i want sleep

// do in 24 hr time!!!!

//feature 1
    //if i want icecream
        //if it's wednesday I want strawberry
        //any other day I want vanilla

//feature 2
    //between 15 and 18 ice cream or hot chocolate depending on odd or even times
    // 15 and 17 odd -->ice cream
    //16 and 18 evan --> hot chocolate

//feature 3..maybe...maybe not

function homeworkSnack (homework, time, day) {
    if (homework == "yes") { // is the homework conditional met?
        if(time < 10) { // if the homeowrk conditional is met and the time conditional is under 10am
            console.log("You get a latte!");
        }
        else if(time >= 10 && time < 15) { // if the home conditional is met and the time is between 10 and 1600 hours
            console.log("You get a hot chocolate");
        }
        else if(time % 2 === 0 && time >= 15 && time <= 18) { //created new time set for hc/ic
            console.log("Here's your hot chokky");
        }
        else if(time % 2 == 1 && time >= 15 && time <= 18) {
            console.log("Here's your frozen sauce");
        }
        else if(time >= 19 && time < 22 && day == "Wednesday") { //if the time conditional is met and the time is between 16 and 22
            console.log("You get some strawberry ice cream");// for strawberry ice cream
        }
        else if(time >= 19 && time < 22 && day != "Wednesday") { ///for vanill ice cream
            console.log("You get some vanilla ice cream");
        }
        else if(time >= 22) { //even if you did your homework it's bed time
            console.log("go to bed!");
        }
    }
    else {
        console.log("sorry no snack"); //one or both conditionals not met
    }
}

homeworkSnack("yes", 15, "Tuesday");//frozen sauce
homeworkSnack("yes", 19, "Wednesday");//strawberry ice cream
homeworkSnack("yes", 20, "Friday"); // nilla ice cream
homeworkSnack("yes", 22, "Wednesday");// go bed
homeworkSnack("no", 10, "Thursday");//no snack