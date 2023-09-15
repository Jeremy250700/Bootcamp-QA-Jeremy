const prompt = require("prompt-sync")()

let nilai =  prompt("Masukan Nilai(Angka): ")
while(nilai >100 || nilai <0 ){
    console.log("Nilai yang diinput tidak boleh lebih dari 100 dan kurang dari 0")
    nilai = prompt("Masukan Nilai(Angka): ")
}
if(nilai >= 90){
    console.log("Nilai nya adalah A")
}
else if(nilai <=89 && nilai >=80){
    console.log("Nilai nya adalah B")
}
else if(nilai <=79 && nilai >=70){
    console.log("Nilai nya adalah C")
}
else if(nilai <=69 && nilai >=60){
    console.log("Nilai nya adalah D")
}
else if(nilai <=59 && nilai >=50){
    console.log("Nilai nya adalah E")
}
else{
    console.log("Nilai nya adalah F")
}