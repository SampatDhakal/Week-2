const SwapArray = require('swap-array').default;
let sampatsFriend = ['Ram', 'Abishek'];
let mutualFriends = [];

function userInput() {
    bikashsFriend = process.argv.slice(2);
}

function err() {
    if (bikashsFriend.length === 0) {
        throw Error("Bikash's friends are empty")
    }
}

function addMutualFollowers() {
    for (let i = 0; i < sampatsFriend.length; i++) {
        for (let j = 0; j < bikashsFriend.length; j++) {
            if (sampatsFriend[i] === bikashsFriend[j]) {
                mutualFriends.push(bikashsFriend[j])
            }
        }
    }
}

userInput()
err()
addMutualFollowers()

console.log(mutualFriends);
console.log(SwapArray(mutualFriends, 0, 1));

