//function two types of function- 1. pre-difine 2. user define
//pre-defind-> push pop unshift shift slice splic

/*let ar = [1,2,3,4,5]
ar.push(6)
    console.log(ar)*/          //..........last ki value ko addone  karne ke liye............push.

/*let ar = [1,2,3,4,5,6]
ar.pop(6)
    console.log(ar)*/    //.................last value ko hatane ke liye...........pop..

    /*let ar = [1,2,3,4,5,6]
    ar.unshift("nazneen")  
        console.log(ar)*/     //...................start ki value ko addone karne ke liye ....unshift

    /*let ar = [1,2,3,4,5,6]
    ar.shift()
        console.log(ar)*/   //..............start ki value ko hatane ke liye............shift
 
       /* let ar = [10,8,7,5]
        var a = parseInt(prompt("enter one number"));
        var b = parseInt(prompt("enter one number"));
        ar.push(a,b)
        console.log(ar)

        var c = parseInt(prompt("enter one number"));
        var d = parseInt(prompt("enter one number"));
        ar.unshift(c,d)
        console.log(ar)*/
//...................slice function..................
        /*let ar = [10,8,7,5,4,3,2,1]
        let pt = ar.slice(1,4)    //...........array mese kuch part ko oprat karna he

        console.log(pt)*/


//.....................splice function...................

/*let ar = [1,2,3,4,5,6,7]  
 ar.splice(2,2)            //....................array me se bich ki value ko hatana or new element lana he
console.log(ar)*/


let ar = [1,2,3,4,5,6,7]  
 ar.splice(2,3,"naaz,sumaila")
console.log(ar)

/*let ar = [1,2,3,4,5,6,7]  
 ar.splice(2,2,8,9)
console.log(ar)*/

