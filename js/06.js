// for loop
// while loop

// someArray.forEach((value, index) => {
//     console.log(index)
// })

// let sum = 0;

// Vsego budet 3 parametra
// Gde pervij parametr - eto index
// for(let index = 0; index < 10; index++) {
//     sum += index
//     console.log(index)
//     if(sum >= 30) {
//         break;
//     }
// }

// console.log(sum)

// for(let index=2; index<9; index++){
//     console.log(index)
// }

// for(let index = 8; index>1; index--){
//     console.log(index)
// }

// U nas estj massiv s mebelju
const furniture = ["Chair", "Table", null, "Sofa", "Lamp"];

// Predstavim chto mi risuem mebelj vivodja ee v console.log
for(let i = 0; i < furniture.length; i++) {
    const singleFurniture = furniture[i];

    // Mi hotim risovatj mebelj toljko esli ona sushestvuet
    if(singleFurniture === null) {
        continue;
    } 

    // Risovka mebeli
    // console.log(singleFurniture);
}

const tipoMatrix = [
    [0,1,2,3],
    [4,5,6],
    [7,8,9,10,11,12]
];

let matrixSum = 0;

// for(let i = 0; i < tipoMatrix.length; i++) {
//     for(let j = 0; j < tipoMatrix[i].length; j++) {
//         matrixSum += tipoMatrix[i][j];
//     }
// }

// tipoMatrix.forEach((innerArray) => {
//     innerArray.forEach((value) => {
//         matrixSum += value;
//     })
// })

console.log(matrixSum)