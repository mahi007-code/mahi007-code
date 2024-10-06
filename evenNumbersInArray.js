function getEvenNumbers(arr) {
    let evenNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]); 
        }
    }
    
    return evenNumbers;
}

let inputArray = [12, 7, 45, 18, 29, 24, 6];
console.log("Even numbers: " + getEvenNumbers(inputArray));
