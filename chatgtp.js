//this example uses nested for loops to find and print all unique pairs of numbers in an array///


/*let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i <5 ; i++) {
  for (let j = i + 1; j < 5 ; j++) {
    console.log("Pair: (" + numbers[i] + ", " + numbers[j] + ")");
  }
}*/


let size = 10; // Size of the multiplication table

for (let i = 1; i <= size; i++) {
  let coloum = "";
  for (let j = 1; j <= size; j++) {
    coloum += (i * j).toString().padStart(4, " ");
  }
  console.log(coloum);
}
