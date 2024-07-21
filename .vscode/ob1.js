let ob = {
    name:"devashish",
    age:25,

}
let ob1 = {
    location:"india",
    distic: "Bhopal",
}
Object.assign(ob,ob1)//..................assige hoga ob par
console.log(ob);

delete ob.age  //.....................delete karne ke liye
console.log(ob);

ob.designation="manager"; //...................add karne ke liye
console.log(ob);