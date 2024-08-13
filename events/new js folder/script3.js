const array = ["moto","gama","bmw","maruti"];//always capital latter supports java script
console.log(array);
array.sort();//alfabetically sequwence order me print krta hai
//short mathode trits as string ye numbers ko support nhi karta isko 
console.log(array);

array.reverse();//
console.log(array);
document.getElementById("demo").innerHTML = array;

// compare function(asending order)
const number = [40,500,350,100,7];
number.sort(function(a,b){
    return a-b;
})
console.log(number);

//descending order
number.sort(function(a,b){
    return b-a;
})
console.log(number);
document.getElementById("demo").innerHTML = number;

//string:-
let x = "ankita";
let city = "waghoda"
//x = "10";
//x = 'my name is\"john deo\"and he is john deo \'s friend\\';
//back tiks ko ham template litterals kahte hai
//$:- string ke andar doller ye batata hai ki ye ak variable hai
x = `hellow world i am ${x} from ${city} `
console.log(typeof x);
document.getElementById("demo").innerHTML = x;

let name = "ankita" 
cource = "full stack dewoloper"
city = "bhopal"
age = 21
 y = `my name is ${name} and i am ${age} years old, frome ${city} and doing ${cource}  cource here`
 document.getElementById("demo").innerHTML = y;
 let z = y.length;
 console.log(z)