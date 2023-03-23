//! Block1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);


//firstResult will return the otherFunction() because when we enter the 
// someFunction() we onlu go to the 6 line change the value of b and return otherFunction()
/*In other words it will show=>function otherFunction(input) {
        return b;
    } */

//Because we've already called the someFunction we can call otherFunction(if it was in difeerent order
//it would gave us an error) so we enter the function and return the vakue of b=>5 
//its a global variable and we changed its value when we first entered the someFunction()
//so it will return 5;


//! Block2
var a = 1;
function b2() {
    a = 10;
    return;
   function a() { }
}

b2();
console.log(a);
//It will return the value if a=>1.Inside the function a declared as function and its the same
//a outside the function' so when we set a's value to 10 we are setting value for the 
//function and not hte global variable

//!Block 3
// let i;
// for (i = 0; i < 3; i++) {
   
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }
//The log fucntion will be delayed 100 milliseconds which means 0.1 seconds.
//In each iteration we create const variable log that logs the value of i;
//In total we have 3 consts. After the function was delayed i becomes 3
//so the out put will be 3,3 times=> 3 3 3