/*function data(){
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    document.write(number1+number2);
}*/

//  function data(){
//      alert("working");
// }
//  function datatype(){
//      alert("working");
// }

var v = 0;
let c = document.getElementById("count")
function dec (){
    if(v>0)
{
    v--;
    c.innerHTML=v
}
}
function inc(){
   v++;
   c.innerHTML=v
 }
