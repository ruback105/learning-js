// if-else, functions

// && - AND
// || - OR
// ===, == - ravno
// >=, <=

const moneyInSebBank = 100;
const productA = 30;
const productB = 50;
const productC = 10;
const productD = 20;

const sum = productA + productB + productC + productD;

// if(moneyInSebBank > sum) {
//     console.log("You can pay.")
// } else {
//     console.log(`Insufficient money amount. Need ${sum-moneyInSebBank} more eur`)
// }

// if(moneyInSebBank > sum) {
//     console.log("You can pay");
// }

// Tak mi zapisivaem constanti kotorie u nas ne pomenjajutsja.
const LEGAL_USA_AGE = 21;
const LEGAL_EU_AGE = 18;

const personAge = 21;

// && = AND
// if(personAge >= LEGAL_EU_AGE && personAge >= LEGAL_USA_AGE) {
//     console.log("Person can but alcohol anywhere in the world!")
// }

// console.log("Start")

// if(personAge >= LEGAL_EU_AGE && personAge >= LEGAL_USA_AGE) {
//     console.log("Person can but alcohol anywhere in the world!")
// } else if(personAge >= LEGAL_USA_AGE) {
//     console.log("Person can buy alcohol in USA");
// } else if (personAge >= LEGAL_EU_AGE) {
//     console.log("Person can buy alcohol in EU");
// } else {
//     console.log("Person cannot buy alcohol anywhere");
// }

// console.log("I am here")

const minAge = 18;
const anastasijaAge = 26;

const educationRequirement = ["bachelor", "master"];
const anastasijaEducation = "master";

// if(anastasijaAge >= minAge) {
//     // if(anastasijaEducation === educationRequirement[0] || anastasijaEducation === educationRequirement[1]) {
//     //     console.log("Anastasija can get a job")
//     // } 
//     if(educationRequirement.includes(anastasijaEducation)) {
//         console.log("Anastasija can get a job")
//     }
// }

if(30 === "30") {
    console.log("Rabotaet")
}