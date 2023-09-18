function result(nilai){
    if(nilai >= 90){
        return("Nilai nya adalah A")
    }
    else if(nilai <=89 && nilai >=80){
        return("Nilai nya adalah B")
    }
    else if(nilai <=79 && nilai >=70){
        return("Nilai nya adalah C")
    }
    else if(nilai <=69 && nilai >=60){
        return("Nilai nya adalah D")
    }
    else if(nilai <=59 && nilai >=50){
        return("Nilai nya adalah E")
    }
    else{
        return("Nilai nya adalah F")
    }
}
module.exports = result