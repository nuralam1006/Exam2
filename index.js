// 1...Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

calculateDifference=(a,b)=>{
    return a-b;
}
console.log(calculateDifference(100,20))

// 2... Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
isOdd=(number)=>{
    if(number % 2 != 0){
        return true
    }else{
        return false
    }
}
console.log(isOdd(11));


//3.. Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

findMin=(numners)=>{
    return Math.min(...numners)
}
console.log(findMin([5,36,2,1,20]));


// 4...Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

filterEvenNumbers=(numbers)=>{
    return numbers.filter(number => number % 2 === 0);
}
console.log(filterEvenNumbers([1,2,6,5,8,5,10]));



// 5... Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

sortingNumber = (x, y) => {
    return x - y;
}
sortArrayDescending = (numbers) => {
    return numbers.sort(sortingNumber).reverse();
}
console.log(sortArrayDescending([5, 3, 6, 10, 20]));




// 6... Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

lowercaseFirstLetter = (str) => {

    return str.charAt(0).toLowerCase() + str.slice(1)
}
console.log(lowercaseFirstLetter("HELLO"));



// 7...Write a function named findAverage that takes an array of numbers and returns the average of all elements.

findAverage = (numbers) => {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length
}
console.log(findAverage([2, 5, 10, 200, 30]));


// 8..Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

isLeapYear = (year) => {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear(1656));