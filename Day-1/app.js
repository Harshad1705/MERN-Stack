// first programm
console.log("Hello world")

// declaring variable
a = 10
b = 20
c= a+b
console.log("Sum : " + c)

// conditional statement
if(a>b){
    c = a;
}else{
    c = b;
}
console.log("Bigger number is : " + c);

// loops
for(i = 1 ;i<=10;i++){
    console.log(i);
}

// arrays
a = [100,200,300,400,"harry"]
a[0] = 10
a[1] = 20
console.log(a.length);

// function

function abc(){
    console.log("Function called...");
}
abc();
x = abc
x();

function add(a=10,b=20){
    c = a+b;
    return c;
}
console.log("Sum : "+ add(5,5))
console.log("Sum : "+ add(5))
console.log("Sum : "+ add())

z = function(a,b){ c = a+b ; return c;}   // anonymous function
console.log("Add : " + z(6,6));

func = (a,b) => {return a+b;}   // arrow function
console.log("Add : " + func(10,10));

function f1(s){console.log(s)};   // arrow function
f1(3)

function f2(data){console.log(data)}
a.forEach(f2);


// module
var m = require("./m1")
console.log(p)

function abc(){          // var defined keyword used only inside that scope
    p++;
}
abc();
console.log(p);

m.abc()
