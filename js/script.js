function isEvenOrOdd(num){
    if(num % 2 == 0){
        return "Number is even";
    }else{
        return "Number is odd";
    }       
}

console.log(isEvenOrOdd(9));
console.log(isEvenOrOdd(10));

function findLargest(num1, num2) {
    if(num1 > num2){
        return `${num1} is the largest`;
    } 
    else if(num1 < num2){
        return `${num2} is the largest`;
    }else if(num1 === num2){
        return `${num1} and ${num2} are equal`;
    }
      
}

console.log(findLargest(42, 42));