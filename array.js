//.............ARRAY......................

// var ar = [2,2.5,"q","naaz"]
// //console.log(ar)
// console.log(ar[3])

// var ar = [1,2,3,4,5]
// for(let  r=0; r<=4; r++){

// console.log(ar [r])}


//..............................................
// let ar = []
// for(let  r=0; r<5; r++){
// ar[r] = parseInt(prompt("enter number" ))
//  console.log(ar[r]);
// }


// w.a.p. to add all ten elements 1 to 10
//w.a.p to print odd number 22 to 1

// var ar = [1,2,3,4,5,6,7,8,9,10]
// for(let  r=0; r<=10; r++){

// console.log(ar [r]+1)}
//..........................sir first quesion.............

// var ar = [1,2,3,4,5,6,7,8,9,10]
// var s = 0
// for(let  r=0; r<=10; r++){
// s = s+ar[r]

// console.log(s);
// }

//......................second quesion.....................

// var ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
// for(let  r=0; r<=22; r++)
//     {
// if(ar [r]%2!=0){
// console.log(ar[r])
// }

//     }

//..............array 5/08/2024.................
//.............. new array ke liye map function.............
// let ar = [1,2,3,4,5]
// for(i=0; i<5; i++)
//     {
//         console.log(ar[i]*ar[i])

// }

// function ke ander function ko use karte he to isko call back function
//.or higher order function
//.............mop function...........data ko fetch karke new array return karta he
// let ar = [1,2,3,4,5]
// let p = ar.map((t)=>{return t*t})
// console.log(p)

//....filter function=> kisi data ko filter kerne ke spacific condition pe use karte he
// let ar = [1,2,3,4,5,6,7,8,9,10]
// let data = ar.filter((e)=>{return e>3})
// console.log(data)

// let even = ar.filter((n)=>{return n%2==0})
// console.log(even)

//.............spread opretor.........
//let ar = [1,2,3,]
//let ar1 = [4,5,6]
// let newArray = [...ar,...ar1]
// console.log(newArray)

// let ar1 = [4,5,6,...ar]
// console.log(ar1)

//............D structuring of array....
// let [name,age,city] = ["Atmik",50,"Bhopal"]
// console.log("Name")

//.....................object......spread opretor
 let ob = {
    emp_namee:"ankita",
    emp_designation: "HR",
}

let ob1 = {
    emp_salary: 25000,
}

// let ob2 = {...ob,...ob1}
// console.log(ob2)

//..........dstructuring...........
let {emp_namee,emp_designation,emp_saiary} = {"ankita", "HR" , 25000,}
console.log(emp_name)