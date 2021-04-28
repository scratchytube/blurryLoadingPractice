const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

//set a variable to an integer
let load = 0
//set a variable to a setInterval
// let int = setInterval(() => {
    
// }, interval);
let int = setInterval(blurring, 30)

// can't use an arrow function here, it wont work
function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    // our loadText starts at 0 and increments by 1 all the way up to 100
    // when it reaches 100 the clearInterval method stops the incrementing
    loadText.innerText = `${load}%`
    // the scale function maps a range of numbers to another range of numbers
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}