let emp = {
    id:parseInt(prompt("enter id")),
    name:prompt("enter your name"),
    age:22,
    designation:"ceo",
    package:"10 lpa",
    array:[1,2,3,4],
    fun:function(){
        alert("function callig")
    },
    accountdetails:{
bank_name:"state bank",
        account_no:"123321" 
       }
} 
//document.write(emp.accountdetails.bank_name)
console.log(emp.array[2])
emp.fun()
console.log(emp.id)
console.log(emp.name)
