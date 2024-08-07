//MAP function:-date:5/8/2024/day:-monday
//1.map:-kisi data ko fatch karke new array me store karata hai

/*let arr =[1,2,3,4,5];
for(let  i=0;i<5 ;i++){
console.log(arr[i]*arr[i]);
}
//higher order function
let p = arr.map( (t)=>{return t*t})
console.log(p);*/

//2.filter function:-kisi spacific condition pr kisi data filter karne ka kam karta hai
/*let ar =[1,2,3,4,5,6,7,8,9,10]
let data = ar.filter((e)=>{return e>3})
console.log(data);*/

/*let ar =[1,2,3,4,5,6,7,8,9,10]
let data = ar.filter((e)=>{return e%2==0})
console.log(data);*/

//SPRADE operator:1st element ko dublicate fatch kar deta hai
///mathod:-1
/*let ar = [1,2,3]
let ar2 = [4,5,6]
let newarray= [...ar,...ar2]
console.log(newarray);*/ 

//mathod-2
/*let ar = [1,2,3]
let ar2 = [4,5,6,...ar]
console.log(ar2)*/

//quetion:-
//mathod:1
/*let ob = {emp_name:"ankita",emp_des:"HR"}
let ob1 = {emp_salary:25000}
let ob2 ={...ob,...ob1}
console.log(ob2)*/
//mathod:-2
/*let ob = {emp_name:"ankita",emp_des:"HR"}
let ob1 = {emp_salary:25000,...ob}
console.log(ob1)*/



//DSTRUCTURING of array:-
/*let [name,age,city] = ["ankita",21,"waghoda"]
console.log(name)
console.log(age)
console.log(city)*/
//que:-
let {emp_name,emp_des} = {emp_name:"ankita",emp_des:"hr"}
console.log(emp_name)
