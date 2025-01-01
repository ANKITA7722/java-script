//qoetion:=take than array numbers and character and saperrate number and carater in deferent chharacter
var array=[1,2,3, "ankit" , "neha", "rupali"];
var num=[];
var char=[];
 array.forEach(element => {
    if(typeof(element)=='string')
    {
        char.push(element);
    }else
    {
        num.push(element);
    }

 });
//  console.log(num);//output:-1,2,3
//  console.log(char);//output:-ankita ,neha,rupali
 document.getElementById("demo").innerHTML = char;
//  document.getElementById("demo").innerHTML = num;

//Quetion:=