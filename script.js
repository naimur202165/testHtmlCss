const square = (x) => {
  return x * x;
};
console.log(square(10));

// Multiple parameters


const mult=(base,power)=>{
    result=1;
    for(i=0;i<power;i++){
        result=result*base;
    }
    return result
}


console.log(mult(2,3))

// Func as values
const fun1= function multipy(){
    return 
}





const squre=()=>{
    return x*x;
}

console.log(square());



const powers=(base,exponent)=>{
    result=1;
    for(let i=0;i<exponent;i++){
        result=result*exponent;
    }

    return result;
}



console.log(powers(2,3))