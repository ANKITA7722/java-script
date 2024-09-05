// let x;
// x = Math.random()*10;
// x = Math.floor(Math.random() * 40);
// function randomnum(min, max){
//     return Math.floor(Math.random() * (max - min + 1));
// }
// let result = randomnum(30,120)
// console.log(result);
// document.getElementById("demo").innerHTML = x;


//topic array:-
// unshift and push mathod of array returns the length of the updated array
// push adds element to the and of array and unshift adds element to the StaticRange
// pop and shift mathode returns the value thet id deleted
// pop mathod deleteS an element from the end
// shift mathod deletes an element from the start
const array = ["BMW", "FORD", "TATA",'SUZUKI',"TOYOTO"];
console.log(array);
console.log(array[3]);//or
console.log(array.at(3));

(array.push("maruti"));
console.log(array)//output:-['BMW', 'FORD', 'TATA', 'SUZUKI', 'TOYOTO', 'maruti']

//1.tostring:-its conword to string formate add on (,) also
const stringArr = array.toString();
console.log(stringArr);
//2.join:-its define to what we want to seprated example:-space,star(*).....
const myArray = array.join("*");
console.log(myArray);



