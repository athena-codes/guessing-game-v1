const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomInRange = ((min, max) => {

    let res = Math.floor(Math.random() * (max - min) + min)
    return res
})

let secretNumber = randomInRange(0, 100)


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


let begin = (entry) => {
    rl.question("Welcome! Let's play a guessing game...",)
    if (typeof entry === "string" || typeof entry !== "string") {
        rl.question("Okay, let's begin!")
    }

}

const askRange = (entry) => {

    let askMin = (entry) => {
        rl.question("You pick the range! Choose minimum:  ", askMax)
        setTimeout((askMin) => {
            console.log(`You have chosen ${entry}`)
        }, 5000)
    }
    let askMax = (entry2) => {
        console.log(`You chose ${entry}`)
        rl.question("Choose maximum: ", response)

        let response =  (entry) => {
            console.log(`Alright. Let's play a game, pick a number ${entry} to ${entry2} `)
        }
    }
}


const askGuess = (entry) => {
    checkGuess(entry)

    rl.question("You pick the range!", askRange)

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


begin()
