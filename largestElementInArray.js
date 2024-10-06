let numbers = [12, 45, 67, 23, 89, 34, 99, 10];

let largestNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];  
    }
}

console.log("The largest number is: " + largestNumber);
