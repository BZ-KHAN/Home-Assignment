import inquirer from 'inquirer'
console.log('\n*-*-*-*-*-*-*-*-*-*-*-*-*- Task #2 -*-*-*-*-*-*-*-*-*-*-*-*-*')
console.log('\n-----------------------Scenario #1-----------------------')
// Creating a simple sum function with return statement
function add(x:number,y:number){ 
    return x + y ;
} // Function completing
add(24,26) // Function calling
console.log('Sum of two numbers =',add(24,26))

console.log('\n-----------------------Scenario #2-----------------------')
// Creating function for checkEvenOrOdd number
function checkEvenOrOdd(even_odd:number){ 
    if (even_odd % 2 == 0){
        console.log(`${even_odd} is an Even Number`)

    }
    else{
        console.log(`${even_odd} is an Odd Number`)
    }
} // Function completing
checkEvenOrOdd(3) // Function calling for an odd number
checkEvenOrOdd(4) // Function calling for an even number

console.log('\n-----------------------Scenario #3-----------------------')
// Creating function for calculate the area of a rectangle 
function calculateArea(width:number,height:number){
    let area = width * height
    console.log(`The Area Of Rectangle Is = ${area}`)

} // Function completing
calculateArea(4,5) // Function calling for area of a rectangle
calculateArea(6,8) // Function calling for area of a rectangle

console.log('\n-----------------------Scenario #4-----------------------')
// Creating function for reverse-string
function reverseString(original_string:string){
    let reverseString = original_string.split('').reverse().join('')
    return reverseString
} // Function completing
const my_str = 'Hi! My Name Is KhanZada'
const reverse_string = reverseString(my_str)
console.log(`Reverse of "${my_str}" is "${reverse_string}"`)

console.log('\n-----------------------Scenario #5-----------------------')
// Creating function for conversion of temprature from celsius to fahrenheit
function celsiusTofahrenheit(celsius:number){
    let fahrenheit = (9 / 5 * celsius) + 32
    return fahrenheit ;

}// Function completing
const celsius_temp = 68;
const fahrenheit_temp = celsiusTofahrenheit(celsius_temp)
console.log(`${celsius_temp}°C is equal to ${fahrenheit_temp}°F\n`)