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
if(c==""){
    alert("plz fill age");
    document.getElementById("age").focus()
    return false;
}
if(d==""){
    alert("plz fill email");
    document.getElementById("email").focus()
    return false;
}
if(e==""){
    alert("plz fill pwd");
    document.getElementById("pwd").focus()
    return false;
}
if(f==""){
    alert("plz fill confirmpwd");
    document.getElementById("confirmpwd").focus()
    return false;
}

}
