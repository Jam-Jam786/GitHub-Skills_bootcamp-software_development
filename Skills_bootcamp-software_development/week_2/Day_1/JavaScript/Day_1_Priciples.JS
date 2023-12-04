// this is a comment
// console.log("hello world!")
// console.log("hello world, again")



// //               addition
// console.log(5 + 5)
// //               multiply
// console.log(5 * 5)
// //               moudlo
// console.log(5 % 5)



// //       were you can change it 
// let myNum = 10
// console.log(myNum)

// //       assigned and means its unmutable. unchangeable
// const gravity = 9.8
// console.log(gravity)

// // old standar of variable
// var life = 0



// let firstName = "Jamal"
// let secondName = "Hussain"

// let fullName = (firstName + " " + secondName)
// console.log(fullName)

// Bullian, true, the t in the output is lower case

// more than
// console.log(4 <5)

// // less then
// console.log(4 > 5)

// // equality
// console.log(5 == 5)


//      f string in js
// console.log(`${firstName} ${secondName}`)

//      Create 3 variables, name, programme and ideal job, interpolate them into a sentence in console.log
// name is a reserve world
// let myName = "Jamal Hussain"
// let programme = "software development"
// let idealJob = "website builder"

// console.log(`Hello, my name is ${myName}, I am currently studying on a ${programme} course and, I wish to become a ${idealJob}`)

//      if statement
// if(10 > 11){
//     console.log("10 is bigger than 9")
// }else if(8< 9){
//     console.log("8 is less than 9")
// }


// example of translate my work from python to Javascript
// let num_1 = 4
// let num_2 = 3
// goalDiff = Math.abs(num_1-num_2)

// if(num_1 > num_2){
//     // console.log("team 1 Won!")  
//     console.log(`team 1 beat team 2 by ${goalDiff} goals`)
// }else if(num_2 > num_1){
//     console.log("team 2 won!")
// }else{
//     console.log("teams drew!")
// }

// generate a random number between 0 and 10
//      add one when timsing it because the range need to include the top most number
// console.log(Math.floor(Math.random() * 11))
// console.log(Math.floor(Math.random() * 251))

// console.log(math.floor(5.56483743))
// console.log(5)

//      iliterates the code on repeate till the condition is no longer met
//      ++ short hand for incrementing for 1 and then reasignes itself as well
//      checks, excutes and illiterates
//      classic loop example and use for multiple etempts
// for(let i = 0; i <= 3; i++){
//     console.log(i)
// }

// for(let i= 10; i <= 20; i++){
//     console.log(i)
// }


// //      FIZZBUZZ TEST
// for(let i=0; i<=15; i++){
//     if (i % 3 == 0){
//     console.log(`${i}FIZZ`)
// }else if (i % 5 == 0){
//     console.log(`${i}BUZZ`)
//    }else if (i % 7 == 0){
//     console.log(`${i}FIZZBUZZ`)
//    }else (`${i} i`)

// }


// for(let i = 1; i < 150; i++){
//     let output = ""
//     if(i % 3 == 0){
//         output += "fizz"
//     }if(i % 5 ==0){
//         output += "buzz"
//     }if(i % 7 == 0){
//         output += "pop"
//     }if(output != ""){
//         console.log(output)
//     }else{
//         console.log(i)
//     }
// }

// // && and 

// // || or


// 5 multiply 1 that goes up by 1 each loop with an answer that follows it along
// for(let i = 1; i <=12; i++){
// times_table = 5
// let answer = times_table * i
// console.log(`"${times_table} x ${i} = ${answer}`)

// }


//      functions and how to control them

// function add(num1, num2){
//     console.log(num1 + num2)
// }

// add(5, 4)
// add(15, 10)
// add(3)
// add(9)


// function multiple(num3, num4){
//     console.log(num3 * num4)
// }

// multiple(1, 2)
// multiple(2, 3)
// multiple(15, 10)

function multiply(number1, number2){
    for(let i=1; i<=number2;i++){
        console.log(`${number1} x ${i} = ${number1*i}`)
    }
}
multiply(7, 1)
multiply(2)
