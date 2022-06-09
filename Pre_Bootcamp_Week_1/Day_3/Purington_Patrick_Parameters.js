function darkSide(person, time) {
    if (person == "anakin" && time == "morning") {
        console.log("good morning anakin")
    }
    else if (person == "anakin" && time == "afternoon") {
        console.log("good afternoon anakin")
    }
    else if (person == "anakin" && time == "evening") {
        console.log("you betraid the jedi's this evening, anakin")
    }
    else if (person == "count dooku" && time == "morning") {
        console.log("I'm coming for you count dooku...tomorrow morning!")
    }
    else if (person == "count dooku" && time == "afternoon") {
        console.log("I'm coming for you count dooku...this afternoon...after lunch!")
    }
    else if (person == "count dooku" && time == "evening") {
        console.log("I'm coming for you count dooku...tonight...out of the shadows!")
    }
    else {
        console.log("these are not the droids you are looking for")
    }
}
darkSide("anakin", "morning");
darkSide("anakin", "afternoon");
darkSide("anakin", "evening");
darkSide("count dooku", "morning");
darkSide("count dooku", "afternoon");
darkSide("count dooku", "evening");
darkSide("jeff", "morning")

function greetings(name, time) { //trying to write the above another way that more efficient
    if (name == "anakin") {
        console.log(`Good ${time} Anakin`)  //different ways of writing between line 34 and 35 to get the same result...keeping to help remember
        console.log("good " + time + " anakin")
    }
    else if (name == "Count Dooku") {
        console.log("Good " + time + " Count Dooku, I'm coming for you")
    }
    else {
        console.log("Good " + time + " these are not the droids you are looking for")
    }
}
greetings("anakin", "morning");
greetings("Count Dooku", "afternoon");
greetings("jeff", "evening");