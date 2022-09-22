

const randomInRange = ((min, max) => {

    let res = Math.floor(Math.random() * (max - min) + min)
    return res
})

console.log(randomInRange(0, 100)); // 16
console.log(randomInRange(15, 20)); // 17
console.log(randomInRange(15, 20)); // 20
