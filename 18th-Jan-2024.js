// callback function is a function which is passed as an argument to a function and executed after some operation is performed.
function modifies(array, callback){
array.push('Pallavi')
callback()
}
let arr = ["s"]
modifies(arr, function(){
    console.log("Name is pushed to the array!")
});

// How to check if a number is an integer

/**
 * Checks if a number is an integer.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is an integer, false otherwise.
 */
function isInt(num){
    if(num % 1 === 0) return true; 
    else return false;
}
console.log(isInt(1),isInt(0.1))

// multiply using currying
console.log(x = 5)
