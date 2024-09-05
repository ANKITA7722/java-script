/*let ob = {id : 102,name : "ankita",age : 51}
document.write(ob.age)

let em = {salary:2000,id : 111, name:"ankita",age:22,add:"bhopal" }
// console.log(em.name)*/
/*let em = {salary:2000,id : 111, name:"ankita",age:22,add:"bhopal" }
for(let k in em){
    console.log(em[k])}*/
//or
    let em = {salary:2000,id : 111, name:"ankita",age:22,add:"bhopal" }
    let k = Object.values(em)
    console.log(k)