function iqTest(numbers){
    //convert our string of numbers into a number array to be able to get the index of our value we are looking for
    let numArray = numbers.split(" ")
    //create new arrays for our even and odd numbers
    let evenNums = numArray.filter(number => number % 2 == 0)
    let oddNums = numArray.filter(number => number % 2 == 1)

    if(evenNums.length > oddNums.length){
        // since we will have more even numbers, lets focus on getting the index of our oddNums in our numArray. since its indexed, we will need to add 1 to get the position of it and we will return that index
        return (numArray.indexOf((oddNums[0])) + 1)
    } else return (numArray.indexOf((evenNums[0])) + 1)
}