//form validation
function savedata(){
let a = document.getElementById("name").value
 let b = document.getElementById("contact").value
 let c = document.getElementById("age").value
let d = document.getElementById("email").value
let e =document.getElementById("pwd").value
 let f =document.getElementById("confirmpwd").value 
if(a==""){
    alert("plz fill name");
    document.getElementById("name").focus()
    return false;
}
if(b==""){
    alert("plz fill contact");
    document.getElementById("contact").focus()
    return false;
}
else if(isNaN(b)){
    alert("only number allow")
    document.getElementById("contact").focus()
    return false
}
else if(contact.length<10 || contact.length>10){
        alert("only  10 number allow")
        document.getElementById("contact").focus()
        return false
}

if(c==""){
    alert("plz fill age");
    document.getElementById("age").focus()
    return false;
}else if(isNaN(c)){
    alert("only digit enter")
    document.getElementById("age").focus()
    return false;
}
if(d==""){
    alert("plz fill email");
    document.getElementById("email").focus()
    return false;
}else if(!(d.includes("@"))){
    alert("enter correct email")
    document.getElementById("email").focus()
    return false
}
if(e==""){
    alert("plz fill pwd");
    document.getElementById("pwd").focus()
    return false;
}else if(!(pass.match(/[@.,*&^%$#]/))){//match string function hai
    alert("match pwd");
    document.getElementById("pwd").focus()
    return false
}
if(f==""){
    alert("plz fill confirmpwd");
    document.getElementById("confirmpwd").focus()
    return false;
}else if(!(pass.match(/[@.,*&^%$#]/))){
    alert("match the 2ndpwd");
    document.getElementById("confirmpwd").focus()
    return false
}else if(pass!=cpass){
    alert("match the 2ndpwd");
    document.getElementById("confirmpwd").focus()
    return false
}

}
