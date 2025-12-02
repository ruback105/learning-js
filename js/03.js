// objects, functions
const array = ["Anastasija", "Mamedbekova - Pusko"];
console.log(array[0], array[1])

const myCV = {
    name: "Anastasija",
    surname: "Mamedbekova - Pusko",
    date: "18.04.1999",
    age: 26,
    hobbies: ["swim", "dance", "sing"],
    favNumber: 34,
    education: {
        elementary: {},
        middle: {},
        high: {
            batchelor: {
                place: "RTU",
                years: "2019-2023",
                level: "Special"
            },
            master: {
                place: "RTU",
                years: "2023-2025",
                level: "Elementary"
            }
        }
    },
    workExp:[
        {
            companyName: "SmartLynx",
            roles:["TechRecords", "Planning engineer"] ,
            years: 3
        },
        {
            companyName: "LGS",
            roles:["Safety coordinator"],
            years: 1 
        }
    ]
}
console.log(myCV.education.high.batchelor.level)
console.log(`${myCV.workExp[0].companyName}:${myCV.workExp[0].years}`)
console.log(`${myCV.workExp[1].companyName}:${myCV.workExp[1].years}`)


