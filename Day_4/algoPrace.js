//create a function that accpts an array, and prints "yummy" each time one of the variables ='s "food". If no array values are "food", then print "i'm hungry" once.

//1. look through the array at each and every element(items in array)
//2. if current element is the word "food" then we'll print "yummy"
//3. if by the time we finished looking at the elements and we have not found "food" print "hungry"

function hungerGames(array) {
    let foodFound = false; //variable keeps track of if there is food or not
    for (let i = 0; i < array.length; i++) { //for loop to iterate through the array to look at all the elements
        if (array[i] == "food") {
            console.log("yummy"); // if food is at this position in the array then print yummy
            foodFound = true; // variable is true that food was found
        }
    }
    if (foodFound == false) { //if no food was found variable remains false
        console.log("I'm Hungry");//we're hungry because no food was foud=nd
    }                                        
}

hungerGames([1,4,"food", "hello", true, "food"]);//food x2
console.log("**********");
hungerGames([2,3,5,"telly", "chumba"]); //hungry