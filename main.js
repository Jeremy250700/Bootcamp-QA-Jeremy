const prompt = require("prompt-sync")()
const wrongInput = require('./wrongInput')
const result = require('./result')

let isError = true
let nilai = parseInt(prompt("Masukan Nilai(Angka): "),10)


while(isError == true){
    const errorMsg = wrongInput(nilai)
    if(errorMsg){
        console.log(errorMsg)
        nilai = parseInt(prompt("Masukan Nilai(Angka): "),10)
    }else{
        isError = false
        console.log(result(nilai))
    }
}
