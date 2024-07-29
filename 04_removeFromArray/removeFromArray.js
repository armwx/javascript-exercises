const removeFromArray = function (array, ...remove) {
    // let position = array.indexOf(remove);
    const arraySet = new Set(array);
    const removeSet = new Set(remove);

    //This does not work atm because method is recently released. 
    // console.log(arraySet.difference(removeSet));

    for (const value of removeSet) {
        arraySet.delete(value)
    }

    const newArray = Array.from(arraySet);

    return newArray;

};

console.log(removeFromArray([53, 7, 23, 75, 65, 382], 0, 53));
// Do not edit below this line
module.exports = removeFromArray;
