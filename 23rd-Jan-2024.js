// Closures
// When inner function access the scope of the outer function during the execution time 

function outerFunction1(){
    var a=10
    function innerFunction1(){
        return a
    }
    return innerFunction1
}
const test = outerFunction1()
console.log(test())


function codeBase(a){
  return function(b){
   return a+b
  }
}
let addSix = codeBase(6)
console.log('addSix',addSix(10))
console.log('addSix',addSix(21))

// Lexical scope
function outerFunction(){
    var a=10
    function innerFunction(){
        return a
    }
    return innerFunction()
}
console.log(outerFunction())