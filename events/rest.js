//rest parameter
function addition(...num){
    console.log(num);
    var sum =0;
    for(let i=0;i<num.length;i++){
        sum += num[i];
    }
return sum;
}
console.log(addition(3,4,6,5,7));
console.log(addition(3,4));
console.log(addition(3,4,6,5,7,10,78));