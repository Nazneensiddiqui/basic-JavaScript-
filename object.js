/*let ob = {id:101,
    name:"nazneen",
    age:30
}
console.log(ob.name)*/

//..................task object.............
//........for in  loop...........keys print hoti he.............
/*let ob = { id: "ayaz@123gmail.com",
    namee: "ayaz ali",
    age: 25,
    contact : 2536489756,

}*/
/*for(let k in ob)
    //console.log(k)//.............keys print hoga
console.log(ob[k])//............value print hoga*/


//..............function Object.keys............

/*let k = Object.keys(ob)
console.log(k)//............keys print*/

/*let k = Object.values(ob)
console.log(k)//............values print*/

/*let k = Object.values(ob)
console.log(k[0])*/

/*let k = Object.keys(ob)
console.log(k[0])*/


//..............................16/7/2024.....nested object.......object ke ander object....
// var emp = parseInt(prompt("enter employ details"))

let emp = {
    id:parseInt(prompt("enter employ id")),
    name:prompt("enter employ name"),
    age:parseInt(prompt("enter employ age")),
    designation:prompt("enter employ designation"),
    /*package:"10 lpa",
    array:[1,2,3,"naaz"],
    fun:function(){
        alert("function calling")
    },
    account:{
        bank_name:"union bank",
        acc_no:12345678,
        acc_balance:1200,
    }*/

}
//console.log(emp.account.acc_balance)//..............1200..print
//console.log(emp.array[3]);//.................naaz .....print
//emp.fun()//...........................function calling ...........print

console.log(emp)