//.......form valitaion.................

function fun(){
 let namee = document.getElementById("name").value   
let contact = document.getElementById("contact").value
let age = document.getElementById("age").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let conf = document.getElementById("conf").value
if(namee==""){
    alert("please fill name field")
    document.getElementById("name"). focus()
    return false;
}
if(contact==""){
    alert("please fill contact field")
    document.getElementById("contact"). focus()
    return false;
}
if(age==""){
    alert("please fill age field")
    document.getElementById("age"). focus()
    return false;
}
if(email==""){
    alert("please fill email field")
    document.getElementById("email"). focus()
    return false;
}
if(password==""){
    alert("please fill password field")
    document.getElementById("password"). focus()
    return false;
}
if(conf==""){
    alert("please fill name field")
    document.getElementById("conf"). focus()
    return false;
}






}