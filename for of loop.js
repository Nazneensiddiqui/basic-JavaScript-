//.....................for of loop............value print karta he...
/*let ar = [10,9,8,7,6,5,4,3,2,1]
for (let v of ar){
    console.log(v);
}*/

//..............for in loop.............indexing print karta he.....object me use hoga..

/*let ar = [10,9,8,7,6,5,4,3,2,1]
for (let v in ar){
    console.log(v);
}*/

// let size = 10; // Size of the multiplication table

// for (let i = 1; i <= size; i++) {
//   let coloum = "";
//   for (let j = 1; j <= size; j++) {
//     coloum += (i * j).toString().padStart(4, " ");
//   }
//   console.log(coloum);
// }

let size = 10;
for(let i=0; i<=size; i++){
  let coloum ="";
  for(let j=0; j<=size; j++){
    coloum +=(j*i).toString().padStart(4,)
}
console.log(coloum)
}