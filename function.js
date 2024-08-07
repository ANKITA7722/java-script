//function:-
//1.user define,
//2.predefine function
//let ar = [1,2,3,4,5]
//push:-last me print karega
// document.write(ar.push(6,7,8,9))

/*2:-add element  
ar.unshift("ankita")
document.write(ar)*/

/*3:-ar.shift("ankita"):-remove first element
document.write(ar)*/
/*ar.pop():-remove last element
document.write(ar)*/

 //slice function:-kuch part nikalne ke liye
 /*let ar = [1,2,3,4,5,6,7,8]
 let pt = ar.slice(2,5)
 document.write(pt)*/
//splice:-new function jo bich ka part hataya usko dubara la bhi sakte hai
let ar = [1,2,3,4,5,6,7,8]
 let pt = ar.splice(2,5,"ankita",2,3,4)
 document.write(ar)
