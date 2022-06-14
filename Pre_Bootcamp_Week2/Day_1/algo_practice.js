for (var i = 5; i >= 0; i--) {
    console.log(i)
}

for(let i = 1; i <= 23; i++) {
    console.log(i)
}

function countDown(num) {
    for(let i = num; num <= 23; num++){
        console.log(num)
    }
}

countDown(10) 

function pizza(name, name2) {
    console.log("Order pizza for " + name  + " " + name2)
    console.log("next order")
}

pizza("Patrick", "Purington")

function counting(num1, num2) {
    for ( let i = num1; i >= num2; i--) {
        if (i == 10) {
            console.log("its 10")
        }
        else {
            console.log(i)
        }
    }
    console.log("done")
}
counting(15, 5)