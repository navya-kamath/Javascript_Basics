// this keyword under Browser Non-Strict// 
// 1. Returns Window Object
console.log(this)

// 2. Function returns Window Object
function displayThis(){
    console.log(this)
}
displayThis();

// 3. Object -> Function returns Object itself
let myObj1 = {
    name : 'Navya',
    age : 24,

    myFn1 : function() {
        console.log(this)
    }
}
myObj1.myFn1();

// 4. Object -> Function -> Function returns Window Object
let myObj2 ={
    name: 'Navya',
    age : 24,

    myFn2 : function(){
        function myFn3() {
            console.log(this)
        }
        myFn3()
    }
}
myObj2.myFn2();