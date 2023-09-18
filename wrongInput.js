function wrongInput(nilai){
    if (nilai >100){
        return "Nilai yang diinput tidak boleh lebih dari 100"
    }else if(nilai<0){
        return "Nilai yang diinput tidak boleh kurang dari 0"
    }else if(Number.isInteger(nilai)==false){
        return "Nilai yang diinput harus berupa angka"
    }
}

module.exports = wrongInput