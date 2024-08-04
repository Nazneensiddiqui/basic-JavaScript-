/*let ob = {id:101,
    name:"nazneen",
    age:30
}
console.log(ob.name)*/

//..................task object.............
//........for in  loop...........keys print hoti he.............
// let ob = { id: "ayaz@123gmail.com",
//     namee: "ayaz ali",
//     age: 25,
//     contact : 2536489756,

// }
// let k = Object.keys(ob)
// for(let k in ob)
//     //console.log(k)//.............keys print hoga
// console.log(ob[k])//............value print hoga*/


//..............function Object.keys............

/*let k = Object.keys(ob)
console.log(k)//............keys print*/

/*let k = Object.values(ob)
console.log(k)//............values print*/

// let k = Object.values(ob)
// console.log(k[0])

/*let k = Object.keys(ob)
console.log(k[0])*/


//..............................16/7/2024.....nested object.......object ke ander object....
// var emp = parseInt(prompt("enter employ details"))

//  let emp = {
//     id:parseInt(prompt("enter employ id")),
//     name:prompt("enter employ name"),
//     age:parseInt(prompt("enter employ age")),
//     designation:prompt("enter employ designation"),
//     // package:"10 lpa",
//     // array:[1,2,3,"naaz"],
//     // fun:function(){
//     //     alert("function calling")
//     // },
//     // account:{
//     //     bank_name:"union bank",
//     //     acc_no:12345678,
//     //     acc_balance:1200,
//     // }

 //}
//console.log(emp.account.acc_balance)//..............1200..print
//console.log(emp.array[3]);//.................naaz .....print
//emp.fun()//...........................function calling ...........print

//console.log(emp)

//Defining a simple object
const person = {
    name: "Nazneen",
    age: 30,
    profession: "Civil Engineer",
    hobbies: ["visiting new places", "cooking food"]
};

// Accessing object properties
// console.log(person.name);       // Output: Nazneen
// console.log(person.age);        // Output: 30
// console.log(person.profession); // Output: Civil Engineer
// console.log(person.hobbies);    // Output: ["visiting new places", "cooking food"]

// Adding a new key-value pair to the object
person.email = "nazneen@example.com";
console.log(person.email);      // Output: nazneen@example.com

// Modifying an existing property of the object
person.age = 31;
console.log(person.age);        // Output: 31

// Adding a method to the object
person.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`);
};

// Using the method
person.greet(); // Output: Hello, my name is Nazneen and I am a Civil Engineer.