// document.getElementById("head").innerHTML="nazneen shumayla"
// document.getElementById("head").style.backgroundColor="red"
// document. getElementById("head").style.paddin="20px"
// document.getElementById("head").style.color="yellow"
// document.getElementById("head").style.alignItems="center"

// let first_heading = document.getElementById("head")
// first_heading.style.color="red"
// first_heading.style.backgroundColor ="yellow"
// first_heading.innerHTML="my js class "



let list = document.getElementsByTagName("li")
for(let i=0; i<=10; i++){
if((i+1)%2===0){
    list[i].style.backgroundColor="gray"}
}

let heading = document.getElementById("head")
heading.style.cssText = "background-Color:yellow; color:red; padding:20px;"
heading.innerHTML="<u> ORACLE </u>"
heading.innerText="text change"

let image = document.getElementById("image1")
image.src="../pot.webp"