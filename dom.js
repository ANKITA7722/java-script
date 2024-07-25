//DOM:-document object mode
//jitne bhi html me tag ,content ,:-un sb ko node kahte hai
//responsive ko dom boblte hai
//. ko:-exess member oprator kahte hai
/*document.getElementById("head").innerHTML="ankita bobde"
document.getElementById("head").style.backgroundColor="red"
document.getElementById("head").style.padding="30px"*/


//getelimenntbyid :-single list items return karta hai
//nodelist array format me hoti hai
/*let first_heading = document.getElementById('head')
first_heading.style.color="white"
first_heading.style.backgroundColor="red"
first_heading.innerHTML="my js class"

let list = document.getElementsByTagName("li")
list[0].style.backgroundColor= "blue"
list[1].style.backgroundColor= "red"
list[2].style.backgroundColor= "yellow"*/

//homwork:-ak list hai mere pAS 10 LIST items hai usme jitne bhi listt items even hai unka background color gray hona chahi
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        let list = document.getElementsByTagName("li");
        list[i - 1].style.backgroundColor = "gray";
    }
}

let heading = document.getElementById("main")
heading.style.cssText = "background-color: red; color: white; padding: 30px";

heading.innerHTML = "<u>oracle</u>"//changing element and text
heading.innerText = "text change"//changing only text

let image =document.getElementById("image1")
image.src="whitehill.webp"//html ki pic ko change karne ke liye use karte hai