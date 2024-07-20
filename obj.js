//date:-8/07/2024
/*let ob ={
    name: "ankita",
    age:21
}
let ob1 ={
    location:"ind",
    namee:"khushi"
}
Object.assign(ob,ob1)
console.log(ob);
delete ob.age
console.log(ob);

ob.cybrom="manager";
console.log(ob)*/

// 3 chije jaruri hoti function ko call  karne ke liye
// declearation:-function ki
// defination:- block
//  functioncalling:-function rady hone pr function ka name likhna padega
/*function idea(){
    let a=parseInt(prompt("enter 1st no."))
    let b=parseInt(prompt("enter 2nd no"))
    sum=a+b;
    alert(sum);
}
idea()*/
//user difinetypes:-4
// 1.without parameter/argument & no return value
/*function demo(){
    console.log("hello");
}
demo()*/
// 2.without para &  return value:-
/*function add(){
    let a= 10;
    let b= 5
    return a+b
}*/
//1:-console.log(add())
//2:-let p =add()
//console.log(p*p);
// 3.with para & no with return value
/*function ankita(c)
{
    console.log(c)
}
var age=32;
ankita(age)*/
// 4.with para & with return value
/*function demo(b)
{
    return b+b;
}
var a=10
console.log(demo(a))*/

//wap to take input frome user and print the table of that No. using function and no return value

/*function table(n){
   // let n = parseInt(prompt("enter any no."));
for(let i=1; i<=10;i++)
{
        console.log(n*i)
}
}
let n = parseInt(prompt("enter any no."));
table(n)*/

//wap   to take input from the user print  of the number using with argument and return value
/*function cube(n){
    return n*n*n
}
let n = parseInt(prompt("enter any no.")) 
console.log(cube(n))*/
function table(n){

    if(n=>1 && n<=10)
    {
       for(let i=1;i<n;i++){
        console.log(i)
             }
    }
    else if( n>=11 && n<=20)
    {
        for(let i=20;i>=1;i--)
        {
            console.log(i)
        }
    }
    else{
        console.log("wrong value")
    }
}
let n = parseInt(prompt("enter any no."));

table(n);


/* function demo(){
 for(let i=1;i<=10;i++)
 {
     sum=sum+i;
 }
 return sum;
 }
let sum=0;
console.log(demo())*/
