// String, Template Literal, length (of String),  

let p = 'Srishti';
let str =`This is ${p}'s string`;  // Template Literals. $ : we use to insert var in template
let longStr = 'this is \n \
a very long \
string';

console.log(str);
console.log(longStr);

console.log(str.length);  // String have length property

let key ="is";

let s1= "a aa aab aabbc cc";
console.log("position of aa: ",s1.indexOf("aa",3));
console.log("Last position of aa: ",s1.lastIndexOf("aa"));
console.log("Last position of aa: ",s1.lastIndexOf("aa", 8));  // gives index taking 8th index as last, i.e reverse me

console.log("Position of is in string is :",longStr.indexOf(key));

console.log("Position of is in string is: :",longStr.indexOf(key,4));  // indexOF will give the first occurance' index, but we can s give another parameter as to from where search will start, here search will start from 4th index i.e 5th place 



// String Method

let mainStr = "this-is-a-long string";

let smallStr = mainStr.slice(2,4);   // includes 2th index till (4-1)th incluede  i.e  = [2,4) 
let smallStr0 = mainStr.slice(-6,-4);   // negative index in slice ; here we traverse from right to left but slice direction is from ----->>>  hence second no is less negative(i.e greater) than first here  (-6,-4]

let smallStr1 = mainStr.substring(2,4); 

let smallStr2 = mainStr.substr(2,4); 
let smallStr3 = mainStr.substr(-6,2);   // Supports -ve no also, i.e 6th position from end & 4 letters 

console.log(smallStr);
console.log(smallStr0);

console.log(smallStr1);
console.log(smallStr2);
console.log(smallStr3);