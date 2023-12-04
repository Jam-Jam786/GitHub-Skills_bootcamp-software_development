// console.log("Hello World!")

// //  example of the add function and using it give me something back 
// function add(num1,num2){
//    return num1 + num2 
// }

// console.log(add(4, 5))
// // example of how to make the answer persistant data in the form of a variable to use later on.
// let answer = add(9, 2)
// console.log(answer)


//          TASK
// generate a random number between 0 and 10
//      add one when timsing it because the range need to include the top most number
// console.log(Math.floor(Math.random() * 11))
// console.log(Math.floor(Math.random() * 251))






// (math.ceil(math.random() * 100))
// if((math.ceil(math.random() * 100)) >= 50){
//     console.log(number)
// }else (number)


// // HOW TO ACTUALLY DO IT
// function getRandomChance(chancePercentage){
//     return Math.ceil(Math.random() *100) <= chancePercentage
// }

// let count = 0

// for(let i = 0; i < 1000; i++){
//     if(getRandomChance(70)){
//         count++
//     }
// }
// console.log (`number of hits: ${count}`)



//              AUTOMATIVE TESTING
// UNIT TESTING - TESTING THE INDIVDUAL COMPONENT
// INTEGRATIVE TESTING - TESTING SECTIONS OF THE INDIVIDUAL SECTIONS
// EXPECTED RESULT AND ACTUAL RESULT = WHAT YOU EXPECT THE RESULTS TO BE AND THEN WHAT THE PROGRAMME ACTUALLY OUTPUTS
// 

// function add(num1, num2){
//     return num1 + num2
// }
// console.assert(add(10,5) == 15, "addition of positive integers not working")
// console.assert(add(-10, -5) == -15, "addition of positive integers are not working")
// console.assert(add(0, 0) == 0, " addition of null values not working")

// //              BREAK POINT IS WHERE YOU PRESS ON THE LEFT OF A NUMBER AND THEN RUN IT SO YOU CAN THEN STEP THROUGH THE PROCESS ONE STEP AT A TIME

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





// function getMaxNumber(numberlist){
//     let hold = numberlist[0]
//     for(let i = 0; i < numberlist.length; i++){
//         if(hold < numberlist[i]){
//             hold = numberlist[i]
//         }
//     }
//     return hold
// }

// // example call
// console.log(getMaxNumber([1, 3, 8, 9, 6, 2])) == 9, "not finding the correct number"
// console.log(getMaxNumber([-9, -8, -1, -6, -5]))

// my 3 pieces of test data for the function example call


// console.assert( FUNCTION (10,5) == 15, "NOTES")

// 5 errors that actual result differers from expected result
// should expected output be 9
// 
// all indexes start at 0
// if statement isnt working correctly
// skipping over every other element
// returns 0

// object oritented coding - CLASS AND OBJECT
// CLASS - TEMPLATE OF AN OBJECT
// OBJECT - INSTANCE OF CLASS. COLLECTION OF ATTRIBUTE(WHAT DESCRIBES THEM) AND FUNCTION(SOMETHING IT CAN DO) dont need to write function in front of it 
// constructor - FRONT DOOR

class person {
    name = "matt"
    job = "tutor"

    constructor(name, job, age,){
        this.name = name
        this.job = job
        this.age = age
    }

    getDescription(){
        return(`my name ${this.name} and I work as a ${this.job} and I am ${this.age}`)
    }
    haveBirthday(){
    return this.age++
}
}

let person1 = new person("matt", "tutor",26 )
person1.haveBirthday()
let person2 = new person("jane", "Scuba Diver", 28)
person2.haveBirthday()
let person3 = new person("micheal", "mechanic", 33)
person3.haveBirthday()

// console.log(person1.getDescription())
// console.log(person2.getDescription())
// console.log(person3.getDescription())


const persons =[person1, person2, person3]

for(let i = 0; i < persons.length; i++){
    persons[i].haveBirthday()
    console.log(persons[i]. getDescription())
}




