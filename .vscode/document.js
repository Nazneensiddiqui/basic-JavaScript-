// document.getElementById("head").innerHTML="nazneen shumayla"
// document.getElementById("head").style.backgroundColor="red"
// document. getElementById("head").style.paddin="20px"
// document.getElementById("head").style.color="yellow"
// document.getElementById("head").style.alignItems="center"

let first_heading = document.getElementById("head")
first_heading.style.color="red"
first_heading.style.backgroundColor ="yellow"
first_heading.innerHTML="my js class "


let list = document.getElementsByTagName("li")
list[0].style.backgroundColor="red"


let order = document.getElementsByTagNameNS("li")
for(let a=0; a<=10; a++){
if(a%2==0){
    order[a].style.backgroundColor="red"}
    else{
        order[a].style.backgroundColor="white"
    }
}

const listItems = document.getElementById('numberList').getElementsByTagName('li');

// Loop through each <li> element
for (let i = 0; i < listItems.length; i++) {
  const number = parseInt(listItems[i].textContent, 10);
  // If the number is even, add the gray background color
  if (number % 2 === 0) {
    listItems[i].style.backgroundColor = 'gray';
  }
}