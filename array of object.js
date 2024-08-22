let employee = [
    {
    id: 101,
    name: "aliyan",
    designation: "senior opretor",
    age: 20,
    },
    {
        id: 102,
        name: "ayaz ali",
        designation: "manager",
        age: 21,
        },
        {
            id: 103,
            name: "hiba ali",
            designation: "hr",
            age: 22,
            },
            {
                id: 104,
                name: "laiba ali",
                designation: "softwara engineer",
                age: 23,
                },
                {
                    id: 105,
                    name: "amaira ali",
                    designation: "hr",
                    age: 24,
                    }

]
console.log(employee)
let y = employee.map((p)=>{return p.name})
console.log(y)
let f = employee.map((p)=>{return p})
console.log(f)
let g = employee.map((p)=>{return p.designation})//.......map function me agar condition lagate heto woh sirf true false me ansere return karta he
console.log(g)
let h = employee.filter((e)=>{return e.age>22})
console.log(h)
let ob = {id:106,name:"adiba siddiqui",designation:"senior HR",age :30}
// employee.push(ob)
// console.log(employee)
// employee.pop()
// console.log(employee)
// employee.unshift(ob)
// console.log(employee)
// employee.shift()
// console.log(employee)
employee.slice(1,3)
console.log(employee)