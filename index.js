const element = document.getElementById('math')

// Ask user for numbers
let a = prompt('Give me a number')
let b = prompt('Give me another number')
let numberOne = parseInt(a)
let numberTwo = parseInt(b)

// TODO: log the input numbers to the console!

let sum = numberOne + numberTwo
console.log(sum)
// TODO: log the sum to the console!

// Template literal string
element.innerHTML = `${a} + ${b} = ${sum}`