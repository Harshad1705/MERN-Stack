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
function xyz_2(){
    console.log("function xyz is called by " + this.name)
}
var obj_2 = {
    code:0827,
    name:"Acro",
    getFunc:xyz,
    getFunc_2:()=>{console.log("called")},                        // arrow function
    getFunc_3:xyz_2,
    getFunc_4:function(){                                         // anonymous function
        console.log("function xyz is called by " + this.code)
    },
    setName:(name)=>{this.name = name;}
}

obj_2.getFunc()
obj_2.getFunc_2()
obj_2.getFunc_3()
obj_2.getFunc_4()

console.log(obj_2.name)
obj_2.setName("harry");
console.log(obj_2.name)
