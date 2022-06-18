function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var leftOverCake = numberOfPieces % numberOfPeople
    if (leftOverCake == 0) {
        console.log("no left over's for you!");
    }
    else if(leftOverCake <= 2) {
        console.log("You have some left over's to share");
    }
    else if(leftOverCake > 2 && leftOverCake < 6) {
        console.log("You have a lot of left over's to share");
    }
    else if (leftOverCake > 5) {
        console.log("have another party");
    }
    
}

howMuchLeftOverCake(119,7)