function evensAndOdds(nums) {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 1) {//if current number is odd, odd++
            odds++ && evens == 0;
        }
        else {
            evens++ && odds == 0;
        }
        if(odds = 3) {
            console.log("That's odd")
            return "That's odd"
        }
        else if(evens = 3) {
            console.log("Even more so")
            return "Even more so"
        }
    }
}
evensAndOdds([8,8,8])
///look at after upload on GitHub