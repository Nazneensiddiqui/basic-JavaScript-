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
    document.getElementById("name").focus()
    return false;
}
//...................contact............
if(contact==""){
    alert("please fill contact field")
    document.getElementById("contact").focus()
    return false;
}

else if(isNaN(contact)){
    alert("only digit")
    document.getElementById("contact").focus()
    return false;
}
else if(contact.length<10 || contact.length>10)
    {alert("only 10 digit no.")
    document.getElementById("contact").focus()
    return false;
    }
   

    //.................age.............
if(age==""){
    alert("please fill age field")
    document.getElementById("age").focus()
    return false;

}
else if(isNaN(age)){
    alert("only digit")
    document.getElementById("age").focus()
    return false;
}

//...............email.................
if(email==""){
    alert("please fill email field")
    document.getElementById("email").focus()
    return false;
}
else if(!(email.includes("@"))){
    alert("@ it is a must")
    document.getElementById("email").focus()
    return false;
}


//............password............

if(password==""){
    alert("please fill password field")
    document.getElementById("password").focus()
    return false;
}
else if(!(password.match(/[@#%&*;:]/))){
    alert(" using spacial charecter @")
    document.getElementById("password").focus()
    return false;
}


//...........confome password....................


if(conf==""){
    alert("please fill confirm password field")
    document.getElementById("conf").focus()
    return false;
}
else if(password!=conf){
    alert("no match")
    document.getElementById("conf").focus()
    return false;
}
}