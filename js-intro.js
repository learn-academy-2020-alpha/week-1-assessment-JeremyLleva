// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

var checkBoiling = (temp) => {
    if( temp === 212) return `212 is above boiling point`
    else if(temp > 212) return `${temp} is above boiling point`
    else return `${temp} is belove boiling point`
}

console.log(checkBoiling(temp1))
console.log(checkBoiling(temp2))
console.log(checkBoiling(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

var mult5 = (nums) => {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * 5
    }
    return nums
}
console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

var mapsMult5 = (nums) => {
    return nums.map(value => value * 5)
}
console.log(mapsMult5(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

var noVowels = (string) => {
    var vowels = "aeiouAEIOU"
    var noVowelsString = ""
    for(let i = 0; i < string.length; i++){
        if(!(vowels.includes(string[i]))) noVowelsString += string[i]
    }
    return noVowelsString;
}
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))



// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

var notAString1 = true
var notAString2 = 42

var noVowelsExtended = (string) => {
    var vowels = "aeiouAEIOU"
    var noVowelsString = ""
    for(let i = 0; i < string.length; i++){
        if(!(vowels.includes(string[i]))) noVowelsString += string[i]
    }
    return noVowelsString;
}





// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

var catsOnly = (list) => {
    return list.filter(value => value.animal === "cat")
}
console.log(catsOnly(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var noCats = (list) => {
    var string = ""
    var noCatsList = list.filter(value => value.animal != "cat");
    for(let i = 0; i < noCatsList.length; i++){
        string += `\"${noCatsList[i].name}\" `
    }
    return string;
}
console.log(noCats(toonimals))
