function dashes(dash:string){
    console.log(dash.repeat(100))

}
// Push Method
dashes('-')
console.log('*-*-*-*-*-*-*-*-*-*-*-*- Task #3 -*-*-*-*-*-*-*-**-*-*-*')
dashes('-')
console.log('We are adding elements at the end of the array in below:') // Heading of function
dashes('-')
let arr:string[] =['mango','apple','banana','grapes'] // Initializing an array
console.log(`\nPrinting a new array which is =`,arr)
let add_element = arr.push('strawberry','kiwi') // Adding new elements at the end of array by push method
console.log(`\nPrinting length of new updated array = ${add_element}`) // Printing length of new updated array
console.log(`\nPrinting elements of new updated array =`,arr,'\n') // Printing elements of new updated array


// Pop Method
dashes('-')
console.log('Now we are removing elements at the end of the array in below:') // Heading of function
dashes('-')
let remove_element = arr.pop() // Removing an element from the end of array by pop method
console.log(`\nPrinting the removed element which is "${remove_element}"`) // Printing the removed element
console.log(`\nPrinting the new updated array after element removing =`,arr,'\n') // Printing the array after removing element


// Shift Method 
dashes('-')
console.log('Now we are removing elements at the start of the array in below:') // Heading of function
dashes('-')
let remove_element_1 = arr.shift() // Removing an element from the start of array by shift method
console.log(`\nPrinting the removed element which is "${remove_element_1}"`) // Printing the removed element
console.log(`\nPrinting the new updated array after element removing =`,arr,'\n') // Printing the array after removing element


// Unshift Method
dashes('-')
console.log('Now we are adding elements at the start of the array in below:') // Heading of function
dashes('-')
let add_element_1 = arr.unshift('kiwi','orange') // Adding an element at the start of array by unshift method
console.log(`\nPrinting length of new updated array = ${add_element_1}`) // Printing length of new updated array
console.log(`\nPrinting the new updated array after element adding =`,arr,'\n') // Printing the array after elements adding
dashes('-')

// Splice Mehtod 
console.log('Now we are removing elements from a specific index number') // Heading of function
dashes('-')
let colors:string[] =['red','orange','blue','yellow','green','black'] // Initializing an array 
console.log('\nPrinting a new array which is =',colors,'\n')
let remv_element = colors.splice(2,2) // Remove elements from array by using splice method
console.log(`Printing of removing elements which are "${remv_element}"\n`) // Printing of removing elements
console.log('Printing of updated array after elements removing =',colors,'\n') // Printing of updated array after elements removing
dashes('-')

// Slice Method
console.log('Now we are slicing and creating an array from a specific index number') // Heading of function
dashes('-')
let fruits:string[] =['apple','banana','orange','mango','grapes','kiwi','strawberry','watermellon','pineapple','peach'] // Initializing an array
console.log('\nPrinting of original fruit array =',fruits,'\n') // Printing of original array
let fruit_slice = fruits.slice(2,5) // Slicing of fruits array
console.log('Printing of sliced array =',fruit_slice,'\n') // Printing of sliced array
dashes('-')
console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- THANKS!! -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
dashes('-')