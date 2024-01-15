// call method
const emp1 = {firstName : 'Pallavi' , lastName :'Upadrista'}
const emp2 = {firstName : 'Suraj' , lastName :'Upadrista'}

function testCall(emp1,emp2){
    // console.log(emp1 + ' ' + this.firstName + ' ' + this.lastName + ' ' +  emp2)
}
testCall.call(emp1, 'Hi', 'How are you feeling today ?')
testCall.call(emp2, 'Hi', 'How are you feeling today ?')

// Apply
testCall.apply(emp1, ['Hi', 'How are you feeling today ?'])
testCall.apply(emp2, ['Hi', 'How are you feeling today ?'])

// call and apply works as same just passing of arguments is different
// Both execute the current function immediately. You
// need to decide whether it’s easier to send in an array or a comma separated list of arguments.
// You can remember by treating Call is for comma (separated list) and Apply is for Array.
// Whereas Bind creates a new function that will have this set to the first parameter passed to
// bind()

let inviteEmployee1 = testCall.bind(emp1);
let inviteEmployee2 = testCall.bind(emp2);
inviteEmployee1('Hello', 'How are you?');
inviteEmployee2('Hello', 'How are you?');

// slice() 

// It returns selected elements in an array as a new array object.
// It selects the elements starting at the given start argument, and ends at the given optional end argument
// without including the last element. If you omit the second argument then it selects till the end.

const array = [1, 2, 3, 4, 5];
const array11 = array.slice(0,2); // returns [1,2]
const array22 = array.slice(1,3); // returns [2,3]
const array33 = array.slice(3); //returns [4, 5] it will take all after 3rd index as end is not specified.
const array44 = array.slice(4) //returns[5]
console.log("array11", array11, "array22", array22, "array33", array33, "array44", array44)
// Slice method won't mutate the original array but it returns the subset as a new array.


// splice()
// The splice() method is used either adds/removes items to/from an array, and then returns the
// removed item.
// Splice method modifies the original array and returns the deleted array.
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array:
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
console.log(arrayIntegers1, arrayIntegers2, arrayIntegers3)

// Higher order functions
const firstOrderFunc = () => console.log ('Hello, I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
const funcValue = higherOrder(firstOrderFunc);
console.log("funcValue", funcValue)