// creating javascript object 

var obj = { code:0827 , name:"Acro" }

x = obj.name
console.log(x)

obj.name = "Acropolis"
x = obj.name
console.log(x)

// creating function inside object

function xyz(){
    console.log("function xyz is called..")
}
var obj_2 = {
    code:0827,
    name:"Acro",
    getName:xyz,
    getName_2:()=>{console.log("called")},
}

obj_2.getName()
obj_2.getName_2()
