const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const randomInRange = ((min, max) => {

    let res = Math.floor(Math.random() * (max - min) + min)
    return res
})

let secretNumber = randomInRange(0, 10)


const checkGuess = (num) => {
    if (Number(num) > secretNumber) {
        console.log("Too high!")
        return false
    } else if (Number(num) < secretNumber) {
        console.log("Too low!")
        return false
    } else if (Number(num) === secretNumber) {
        console.log("Correct!")
        return true
    }
}

// console.log(checkGuess())

const askGuess = (entry) => {
    checkGuess(entry)

    if (Number(entry) < secretNumber) {
        rl.question("Guess Again: ", askGuess)

    } else if (Number(entry) > secretNumber) {
        rl.question("Guess Again: ", askGuess)

    } else if (Number(entry) === secretNumber) {
        console.log("You Win!")
        rl.close()

    } else if (entry === "" || typeof entry !== "number") {
        rl.question("Please guess a number: ", askGuess)
    }
}

rl.question('Guess a number 1-10!:', askGuess);
