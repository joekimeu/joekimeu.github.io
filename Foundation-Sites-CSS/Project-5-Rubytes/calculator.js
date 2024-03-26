//Updated by Joe Kimeu 03/22/2024

//adds input into a buffer that will be cleared and solved later
function append(value) {
    document.getElementById('result').value += value;
}

// backspace functionality
function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

// clears user input
function clear() {
    document.getElementById('result').value = '';
}

// calculates the inverse of the result
function inverse() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = 1 / parseFloat(result);
}

// calculates the square
function square() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = Math.pow(parseFloat(result), 2);
}

// calculates the square root
function squareRoot() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = Math.sqrt(parseFloat(result));
}

//outputs final computation
function compute() {
    let result = document.getElementById('result').value;
    //console.log(result)
    document.getElementById('result').value = eval(result);
    //console.log(result)
}
