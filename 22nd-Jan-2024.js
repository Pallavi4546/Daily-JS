// (function (){
// var a=b=c=3
// }())
// console.log(typeof a) //undefined
// console.log(typeof b) // number
// console.log(typeof c) //number

// because it will be considered as 
// (function (){
//     c = 3 //considered as global scope
//     b = c
//     var a=b      
//     // as it is declared with var it's scope will be functional and it will be undefined outside the function
//     }())
//     console.log(typeof a)
//     console.log(typeof b)
//     console.log(typeof c)

// What if I use let instead of var
// (function (){
//     let a=b=c=3
//     }())
//     console.log(typeof a) //undefined
//     console.log(typeof b) // number
//     console.log(typeof c) //number

    // What if I use const instead of var
(function (){
    let a=b=c=3
    }())
    console.log(typeof a) //undefined
    console.log(typeof b) // number
    console.log(typeof c) //number

    // conscept of Hoisting
    var a = 0
    function foo(){
        a=10
        return;
        var a = function(){
            /**
             * as var is declared again in the functional scope it will be considered as local now.
             */
        }
    }
    foo()
    console.log(a) // value of a will be 0 as it is considered to be on global scope.

    // What if I remove the var declaration inside the function

    function foo1(){
        a=10
        return;
        // var a = function(){
        //     /**
        //      * as var is not declared again in the functional scope it will be considered as global scope now.
        //      */
        // }
    }
    foo1()
    console.log(a) // value of a will be 10 as it is considered to be on global scope.

// what if I remove the var but the function is still there

    function foo2(){
        a=10
        return;
         a = function(){
            /**
             * after return statement only var is hoisted nothing else therefore the output will be 10
             */
        }
    }
    foo2()
    console.log(a)  // value of a will be 10 

    // what if I remove the return statement
    function foo3(){
        a=10
         a = function(){
            /**
             * after return statement only var is hoisted nothing else therefore the output will be 10
             */
        }
    }
    foo3()
    console.log(a) // value of a will be a function

    function todo(){
        function foo(){
            return 100;
        }
        return foo()
        function foo(){
            return 10
        }
    }
    
    console.log(todo())  // output will be 10 there will be a concept of Hoisting! functions will be hoisted first and then return statement will be executed.


    // Function declaration are hoisted but function expressions are not hoisted

    function test(){
        console.log("this is a test function")
    }
    test() // output will be this is a test function if I call test() before or after the function declaration due to hoisting

    var test = function(){
        console.log("this is a test function")
    }
    test() // the output will be test is not a function if I call the function before it's declaration
    // as function expressions cannot be hoisted but it will give output this is a test function if I call test() after the function declaration.