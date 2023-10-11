// Step 1
let coinFlip

// Step 2, Step 3
let i = parseInt(prompt("Enter amount of time to loop"))
for(x = 0; x < i; x++){
    coinFlip = Math.round(Math.random())
}

// Step 4
if(coinFlip === 0){
    console.log("Heads")
}
else if(coinFlip === 1){
    console.log("Tails")
}