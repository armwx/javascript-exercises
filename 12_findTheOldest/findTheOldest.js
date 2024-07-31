const findTheOldest = function(array) {
    const date = new Date();


let oldestFinder = array.reduce(function(accumulator, person, index, array) {
    //Define age since we will calculate that here. 
    let age;

    if (person.yearOfDeath === undefined) {
        age = date.getFullYear() - person.yearOfBirth;
    }
    else {
        age = person.yearOfDeath - person.yearOfBirth
    }

    if (age > accumulator.oldestAge) {
        accumulator.oldestAge = age;
        accumulator.oldIndex = index;
    }

    return accumulator;
    
}, {oldestAge: -1 , oldIndex: -1});

return array[oldestFinder.oldIndex];
// console.log(
//     `The array item is: ${oldestFinder.oldIndex} 
//     and the age is: ${oldestFinder.oldestAge};`)


};

findTheOldest(people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Alex",
        yearOfBirth: 1942,
        yearOfDeath: 1980,
      },
  ]);


// Do not edit below this line
module.exports = findTheOldest;


//


    // const people = [
    //     {
    //       name: "Carly",
    //       yearOfBirth: 1942,
    //       yearOfDeath: 1970,
    //     }, ]
    
    // My First Try to understand logic and try solving. 
    // I don't have clear understanding of reduce method yet. 
    // Should practice reduce and callback functions. 

    // const oldIndex = 0;
    // const oldestAge = 0;
    // let oldestFinder = array.reduce(function(index){
    //     for(person of array) {
    //         person.name = array[accumulator].name;
    //         person.YOB = array[accumulator].yearOfBirth;
    //         person.YOD = array[accumulator].yearOfDeath;

    //         if (person.YOD == undefined){
    //             person.age = date.getFullYear() - person.YOB;
    //         }
    //         else {
    //             age = person.YOD - person.YOB;
    //         }

    //         if (age > oldestAge){
    //             oldestAge = age;
    //             oldIndex = index;
    //         }
    //         else {
    //             continue;
    //         }
    //     }
    // })

// This was trying to read the values from user's array and log the objects properly. 


    // let name = array[1].name;
    // let yearOfBirth = array[1].yearOfBirth;
    // let yearOfDeath = array[1].yearOfDeath;

    

    // if (yearOfDeath == undefined) {
    //     age = date.getFullYear() - yearOfBirth;
    // } else {
    //     age = yearOfDeath - yearOfBirth;
    // }

    // console.log(`
    //     Name: ${name}
    //     YOB: ${yearOfBirth} 
    //     YOD: ${yearOfDeath}
    //     Age: ${age}`
    // )
