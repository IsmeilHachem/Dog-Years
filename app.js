// save my age
const myAge = 28;

//first two years of a dog's life counts as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

//subtract 2 years from my age to account for dog's first two years
let laterYears = myAge - 2;

//each year after the first two equals 4 dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Get my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// create string variable with my name as value
const myName = "Ismeil".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
