// Step 1
let coinFlip

// Step 2,3,4,5
do {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log("Heads")
    } else if (coinFlip === 1){
        console.log("Tails")
    }
} while (coinFlip === 0)