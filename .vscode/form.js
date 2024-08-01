function data(){
    let number1 =parseInt (document.getElementById("num1").value);
    let number2 = parseInt (document.getElementById("num2").value);
    document.write(number1+number2);
}
//..................onmouseenter..............

function fun()
{
    alert("working progress")
}

//...................onmouseleave...............

function fun1(){
    alert("working is not progess")
}
//.................task js...............
    
    var a = 0;
    let c =document.getElementById("head")
    let b =document.getElementById("head1")
    function inc(){
    a++;
    c.innerHTML = 500*a;
    b.innerHTML = a;
}

function dec(){
    if(a>0){
    a--;
    c.innerHTML = 500*a;
    b.innerHTML = a;
}}

//...............image task.................
