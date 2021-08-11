// object (JSON), for, forEach 
// Object oriented programming

// Allows to create oject without defining a class
// This is one way to create object (without class) called JSON Objects

var bird ={};   // bird is an empty object

// CREATING OBJECT WAY- 1,  using JSON

var bird1= {
    x: 10,
    y: 50,
    color: "red",
    eggs :["egg1","egg2","egg3","egg4"],
    fly :function(){                              // adding fuc in the object
        console.log("Bird1 is flying at coordinate :",this.x,this.y);   // this refers to the current object.vWhenevr there is propety in object and you need them in class/fuction, you need to use this keyword. Without this x & y will be undefined
    },
}
console.log(bird1);

bird1.x= 40;   // we can update object property
console.log(bird1);


// Iterate over object' array -

console.log(bird1.eggs);
for(let i=0; i< bird1.eggs.length;i++){
    console.log("Egg no: ", bird1.eggs[i]);
}

// For Each Loop,  forEach can be written using arrow fuc., callback fuc. 

bird1.eggs.forEach(function(val,idx){
      console.log(idx,val);
});


// CREATING OBJECT WAY- 2, using CLASS 

function Fruit(taste,color){   // Function Declaration
    this.taste = taste;
    this.color =color;
}

//  Object instantiation using new keyword 
let mango =new Fruit("sweet","Yellow");
let kiwi= new Fruit("sour", "Green");



// CREATING OBJECT WAY- 2, using CLASS Keyword, introduced in ECMAScript 2015

// Class Declaration  

class FruitClass{                
    constructor(taste,color){
        this.color =color;
        this.taste=taste;
    }
};

let kiwi1 = new FruitClass("sour","green");


// Class Experssion 
let FruitClass2 = class{
    constructor(taste,color){
        this.color =color;
        this.taste=taste;
    }
};

let kiwi2 = new FruitClass2("sour2","green-2");

