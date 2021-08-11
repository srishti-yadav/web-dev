// Array, for loop, for-of, for-in loop, Array Function( push,pop, shift, unshift),  array-slice, splice, concat


let arr=[1,2,"hello",[10,3,4],false];

console.log(arr.length);
console.log(typeof arr[3]);


// Iteration

// for loop
console.log("for-loop");
for(let i=0;i<arr.length;i++)
   console.log(arr[i]);

// for-of loop
console.log("for-of-loop");
for(let val of arr){
    console.log(val);
}

// for-in loop
console.log("for-in-loop");
for (let index in arr){
    console.log(arr[index]);
}


// Array functions
// JS array are dynamic array hence we can add & remove an element very easily, in C,C++,Java you can do push pop instack but in JS even in array u can do it

let arr1 = ["apple", "orange", "banana"];  // array (arr1) also has a property length (length is property & not func.)
console.log(arr1);
console.log(arr1.length, arr1["length"]);

arr1.push("guava","pineapple","blueberry"); console.log(arr1);     // push, to insert at end
arr1.pop();   console.log(arr1);           // pop, to remove from end
arr1.shift();   console.log(arr1);          // shift, to remove from front
arr1.unshift("Mango","kiwi");   console.log(arr1);  // unshift, to insert at the front
   console.log(arr1.indexOf("orange"));       // to find index of element


// Data Changing

let notes =['do','re', 'me', 'fa','so','la','ti','do'];
//slice func.

notes.slice(4,6);
console.log(notes);

let new_notes= notes.splice(4);      // takes element from 4th place and removes them from original array
let new_notes2= new_notes.splice(1,2);  // takes element from 1st place to 2nd place and removes them from original array

console.log(new_notes2);         
console.log(notes);        // contains left elements after the spliced elements are removed

// splice can also change/replace elements 

notes.splice(1,2,'aa','bb','cc','dd');   // 1: position from which elements will be removed, 2: no. of elements to be removed, 'aa': new elemt to be added
console.log(notes);


// Concat fuc.  does not mutate original array
console.log(notes.concat('sa','re',['ga','ma']));   // you can also pass array in concat 
console.log(notes);        //  notes (original array) is unchanged

