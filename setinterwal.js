// let a = 1;
// let fun = setInterval(()=>{
//     if(a == 10){
//         clearInterval(fun)
//     }
//     document.write(a++);
// })

// setTimeout(()=>{alert("this working")},200)


let date = new Date()
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());
setInterval(()=>{
let date = new Date()
let timee = date.toLocaleTimeString()
let dg = document.getElementById("digital_clock");
dg.innerHTML =timee
},1000)
