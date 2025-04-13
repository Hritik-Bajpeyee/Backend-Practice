// const { error } = require("console")
// const fs = require("fs")

// console.log(fs)

// console.log("START")
// // fs.writeFileSync("Hritik.txt","THIS is The file")


// // This Make Call Back Hell dont use use promise Instaed
// fs.writeFile("Hritik2.txt","This is Second file 343",()=>{
//     console.log('DONE')
//     fs.readFile("Hritik2.txt", (error,data)=>{
//         console.log(error,data.toString())
//     })

//     //Append
//     fs.appendFile("Hritik2.txt","greissudoil9",(e,d)=>{
//         console.log(d)
//     })
// })
// console.log("Ending")


// Using Promises----
import fs from "fs/promises"

let a = await fs.readFile("Hritik.txt")

let b = await fs.appendFile("Hritik.txt","\n\nPromise is Good")

console.log(a.toString(),b)